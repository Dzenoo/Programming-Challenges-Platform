import React, { useContext, useState } from "react";
import { Container } from "@mui/material";
import { AuthContext } from "../../shared/context/AuthContext";
import { ChallengeContext } from "../../shared/context/ChallengeContext";
import ProfileContent from "../components/ProfileContent";
import ProfileSidebar from "./ProfileSidebar";
import ProfileAchievements from "../components/ProfileAchievements";
import ProfilePlan from "../components/ProfilePlan";
import ProfileChallenges from "../components/ProfileChallenges";

const ProfilePage = () => {
  const [currentPage, setcurrentPage] = useState(0);
  const authCtx = useContext(AuthContext);

  // Get properties from user profile
  const { first_name, last_name, user_name, email, image, number, level, xp } =
    authCtx.profile;

  // User challenges from context
  const { userChallenges } = useContext(ChallengeContext);

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
      {currentPage === 1 && <ProfileAchievements />}
      {currentPage === 2 && <ProfileChallenges challenges={userChallenges} />}
      {currentPage === 3 && <ProfilePlan />}
    </Container>
  );
};

export default ProfilePage;
