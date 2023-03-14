import React, { useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/authhook";
import { AuthContext } from "./AuthContext";

export const ChallengeContext = React.createContext();

export const ChallengeProvider = ({ children }) => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  const [userChallenges, setuserChallenges] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const auth = useAuth();
  const authCtx = useContext(AuthContext);
  const { profile } = authCtx;

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const promises = profile.challenges.map((challengeId) =>
          fetch(`http://localhost:8000/api/challenges/${challengeId}`, {
            headers: { Authorization: `Bearer ${auth.token}` },
          }).then((response) => response.json())
        );
        const challengeObjects = await Promise.all(promises);
        setuserChallenges(challengeObjects);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchChallenges();
  }, [profile]);

  useEffect(() => {
    setisLoading(true);
    const fetchChallenges = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/challenges/", {
          method: "GET",
        });

        const responseData = await response.json();

        setChallenges(responseData.challenges);
        setSelectedChallenges(responseData.challenges);
        setisLoading(false);
      } catch (err) {
        setisLoading(false);
        console.log(err.message);
      }
    };

    fetchChallenges();
  }, []);

  const filterChallenges = (technology, difficulty) => {
    const newChallenges = [...challenges];

    const filteredChallenges = newChallenges.filter((c) => {
      if (technology && !c.technologies.includes(technology)) {
        return false;
      }
      if (difficulty && c.difficulty !== difficulty) {
        return false;
      }
      return true;
    });

    if (filteredChallenges.length === 0) {
      toast.error(
        `Don't have challenges for ${technology} with difficulty ${difficulty} `
      );
    } else {
      setSelectedChallenges(filteredChallenges);
    }
  };

  const startChallenge = async (challengeId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/challenges/${auth.userId}/${challengeId}/start`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      );

      if (profile.challenges.includes(challengeId)) {
        toast.error("Challenge is already started");
      } else {
        toast.success("Challenge added to your profile!");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <ChallengeContext.Provider
      value={{
        challenges,
        filterChallenges,
        userChallenges,
        isLoading,
        selectedChallenges,
        startChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
