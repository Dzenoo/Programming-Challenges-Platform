import React, { useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";

export const ChallengeContext = React.createContext();

export const ChallengeProvider = ({ children }) => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  const [userChallenges, setuserChallenges] = useState([]);
  const [submittedChallenges, setsubmittedChallenges] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { userId, profile, token } = useContext(AuthContext);

  const fetchChallenges = async () => {
    try {
      const promises = profile.challenges.map((challengeId) =>
        fetch(
          `${process.env.REACT_APP_BACKEND_URL}/challenges/${challengeId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        ).then((response) => response.json())
      );
      const challengeObjects = await Promise.all(promises);
      setuserChallenges(challengeObjects);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchChallenges();
  }, [token, profile]);

  // Fetch challenges
  useEffect(() => {
    setisLoading(true);
    const fetchChallenges = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/challenges/`,
          {
            method: "GET",
          }
        );

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

  // Function for filtering challenges
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

  // Start Challenge
  const startChallenge = async (challengeId) => {
    try {
      await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/challenges/${userId}/${challengeId}/start`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
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

  // Fetch submitted challenges
  useEffect(() => {
    setisLoading(true);
    const fetchSubmittedChallenges = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/challenges/submittedChallenges`
        );

        const responseData = await response.json();
        setsubmittedChallenges(responseData.submittedChallenges);
        setisLoading(false);
      } catch (err) {
        setisLoading(false);
      }
    };

    fetchSubmittedChallenges();
  }, []);

  return (
    <ChallengeContext.Provider
      value={{
        challenges,
        filterChallenges,
        userChallenges,
        isLoading,
        selectedChallenges,
        startChallenge,
        submittedChallenges,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};
