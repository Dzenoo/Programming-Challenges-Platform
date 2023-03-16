import { Container } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../shared/context/AuthContext";
import ProfileContent from "../components/ProfileContent";
import ProfileSidebar from "./ProfileSidebar";
import ProfileAchievements from "../components/ProfileAchievements";
import ProfilePlan from "../components/ProfilePlan";
import ProfileChallenges from "../components/ProfileChallenges";
import { ChallengeContext } from "../../shared/context/ChallengeContext";

const ProfilePage = () => {
  const [currentPage, setcurrentPage] = useState(0);
  const authCtx = useContext(AuthContext);

  const { first_name, last_name, user_name, email, image, number, level } =
    authCtx.profile;

  const { userChallenges } = useContext(ChallengeContext);

  console.log(userChallenges);

  const sidebarProps = {
    user_name,
    email,
    image,
  };

  const contentProps = {
    first_name,
    last_name,
    email,
    level,
    number,
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
