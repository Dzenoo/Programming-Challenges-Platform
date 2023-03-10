import { Container } from "@mui/material";
import React, { useState } from "react";
import ProfileContent from "../components/ProfileContent";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileAchievements from "../components/ProfileAchievements";
import ProfilePlan from "../components/ProfilePlan";

const ProfilePage = () => {
  const [currentPage, setcurrentPage] = useState(0);

  const activePageHandler = (n) => {
    setcurrentPage(n);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        padding: "40px 0",
        gap: "2em",
      }}
    >
      <ProfileSidebar onFilterPage={activePageHandler} />
      {currentPage === "0" && <ProfileContent />}
      {currentPage === "1" && <ProfileAchievements />}
      {currentPage === "2" && <ProfilePlan />}
    </Container>
  );
};

export default ProfilePage;
