import { Card, Container, Typography } from "@mui/material";
import React from "react";
import TableLeaderboard from "../components/TableLeaderboard";
const LeaderboardPage = () => {
  return (
    <Container sx={{ padding: "40px 0" }}>
      <Card sx={{ padding: "40px" }}>
        <Typography variant="h4">Welcome to leaderboard!</Typography>
        <Typography variant="p" color="textSecondary">
          Check out the usernames of the top performers and their ranking on the
          leaderboard. You can also see their scores, progress, achievements,
          and badges they have earned for completing challenges and milestones.
        </Typography>
      </Card>
      <TableLeaderboard />
    </Container>
  );
};

export default LeaderboardPage;
