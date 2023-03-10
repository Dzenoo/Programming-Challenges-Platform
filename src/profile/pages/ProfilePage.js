import { Container } from "@mui/material";
import React, { useState } from "react";
import ProfileContent from "../components/ProfileContent";
import ProfileSidebar from "./ProfileSidebar";
import ProfileAchievements from "../components/ProfileAchievements";
import ProfilePlan from "../components/ProfilePlan";
import ProfileChallenges from "../components/ProfileChallenges";

const ProfilePage = () => {
  const [currentPage, setcurrentPage] = useState(0);

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
      <ProfileSidebar onFilterPage={activePageHandler} />
      {currentPage === 0 && <ProfileContent />}
      {currentPage === 1 && <ProfileAchievements />}
      {currentPage === 2 && <ProfileChallenges />}
      {currentPage === 3 && <ProfilePlan />}
    </Container>
  );
};

export default ProfilePage;
