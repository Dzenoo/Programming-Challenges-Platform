import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ChallengeContext } from "../../shared/context/ChallengeContext";

import "../css/challenges.css";

const ChallengeDetails = () => {
  const challengesCtx = useContext(ChallengeContext);
  const { challenges } = challengesCtx;
  const chId = useParams().cid;
  const challenge = challenges.filter((c) => c.id === chId);

  return (
    <Container maxWidth="lg" sx={{ padding: "40px 0" }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          {challenge.map((ch) => (
            <Card
              key={ch.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CardMedia image={ch.image} sx={{ padding: "20.25%" }} />
              <CardContent sx={{ flexGrow: "1" }}>
                <Typography variant="h4">{ch.title}</Typography>
                <Typography variant="p" color="textSecondary">
                  {ch.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "2em",
                  }}
                >
                  <Typography variant="h4" color="gold">
                    {ch.xp} xp
                  </Typography>
                  <Typography
                    variant="h6"
                    color={`${
                      ch.difficulty === "Advanced" ? "royalblue" : ""
                    }  `}
                  >
                    {ch.difficulty}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Grid>

        <Grid item>
          {challenge.map((challenge) => (
            <Card sx={{ padding: "30px" }}>
              <Typography variant="h3">What you need to do?</Typography>
              <Typography variant="p" color="textSecondary">
                Follow this steps to and complete project by doing next:
              </Typography>

              <List>
                {challenge.listOfSteps.map((li) => (
                  <ListItem key={li}>{li}</ListItem>
                ))}
              </List>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChallengeDetails;

// {challenge.map((c) => (
//   <Container maxWidth="md">
//     <img src={c.image} alt={c.title} />
//     <Typography variant="h4">{c.title}</Typography>
//     <Typography variant="p">{c.description}</Typography>
//   </Container>
// ))}
