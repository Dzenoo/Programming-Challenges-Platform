import { Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ChallengeContext } from "../../shared/context/ChallengeContext";

import "../css/challenges.css";

const ChallengeDetails = () => {
  const challengesCtx = useContext(ChallengeContext);
  const { challenges } = challengesCtx;
  const chId = useParams().cid;

  const challenge = challenges.filter((c) => c.id === chId);

  return (
    <Container maxWidth="lg">
      {challenge.map((c) => (
        <Container maxWidth="md">
          <img src={c.image} alt={c.title} />
          <Typography variant="h4">{c.title}</Typography>
          <Typography variant="p">{c.description}</Typography>
        </Container>
      ))}
    </Container>
  );
};

export default ChallengeDetails;
