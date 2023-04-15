import React, { useContext, useEffect, useState } from "react";
import { Container } from "@mui/material";
import { AuthContext } from "../../shared/context/AuthContext";
import { ChallengeContext } from "../../shared/context/ChallengeContext";
import ProfileContent from "../components/ProfileContent";
import ProfileSidebar from "./ProfileSidebar";
import ProfileAchievements from "../components/ProfileAchievements";
import ProfileChallenges from "../components/ProfileChallenges";

const ProfilePage = () => {
  const [currentPage, setcurrentPage] = useState(0);
  const [loadedAchievements, setloadedAchievements] = useState([]);
  const { userId, profile } = useContext(AuthContext);
  const { userChallenges, isLoading } = useContext(ChallengeContext);

  // Get properties from user profile
  const {
    first_name,
    last_name,
    user_name,
    email,
    image,
    number,
    level,
    xp,
    submittedChallenges,
  } = profile;

  // User challenges from context

  useEffect(() => {
    if (submittedChallenges.length === 1) {
      fetch(
        `${process.env.REACT_APP_BACKEND_URL}/achievements/${userId}/addAchievement?name=ChallengeAccepted`,
        {
          method: "POST",
        }
      );
    }
  }, [submittedChallenges, userId]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/achievements/${userId}`
        );

        const responseData = await response.json();
        setloadedAchievements(responseData.achievements);
      } catch (err) {}
    };
    fetchAchievements();
  }, [userId]);

  // Props for sidebar
  const sidebarProps = {
    user_name,
    email,
    image,
  };

  // Props for profile content
  const contentProps = {
    first_name,
    last_name,
    email,
    level,
    number,
    xp,
  };

  const activePageHandler = (n) => {
    setcurrentPage(n);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        padding: "40px 0",
        gap: "2em",
      }}
    >
      <ProfileSidebar {...sidebarProps} onFilterPage={activePageHandler} />
      {currentPage === 0 && <ProfileContent {...contentProps} />}
      {currentPage === 1 && (
        <ProfileAchievements userAchievements={loadedAchievements} />
      )}
      {currentPage === 2 && <ProfileChallenges challenges={userChallenges} />}
    </Container>
  );
};

export default ProfilePage;
