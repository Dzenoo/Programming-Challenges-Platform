import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Box } from "@mui/system";
import { Link, useParams } from "react-router-dom";
import { ChallengeContext } from "../../shared/context/ChallengeContext";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import "../css/challenges.css";

const ChallengeDetails = () => {
  const challengesCtx = useContext(ChallengeContext);
  const { challenges } = challengesCtx;
  const chId = useParams().cid;
  const challenge = challenges.filter((c) => c.id === chId);

  return (
    <Container maxWidth="lg" sx={{ padding: "40px 0" }}>
      <Grid container spacing={4} sx={{ display: "flex" }}>
        <Grid item>
          {challenge.map((ch) => (
            <Card
              key={ch.id}
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CardMedia
                image={ch.image}
                sx={{ padding: "18.25%", width: "100%" }}
              />
              <CardContent
                sx={{
                  flexDirection: "column",
                  display: "flex",
                  gap: "1.2em",
                }}
              >
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
                <Button variant="contained" size="large" sx={{}}>
                  Start challenge
                </Button>
              </CardContent>
            </Card>
          ))}
        </Grid>

        <Grid item sx={{ display: "flex", flexWrap: "wrap" }}>
          {challenge.map((challenge) => (
            <Card sx={{ padding: "30px" }}>
              <Typography variant="h4">What you need to do?</Typography>
              <Typography variant="p" color="textSecondary">
                Follow this steps to and complete project by doing next:
              </Typography>
              <List>
                {challenge.listOfSteps.map((li) => (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CheckCircleIcon style={{ fill: "darkgreen" }} />
                    <ListItem key={li}>{li}</ListItem>
                  </Box>
                ))}
              </List>
            </Card>
          ))}

          <Card sx={{ padding: "30px" }}>
            <Typography variant="h4">Prerequisites</Typography>
            <Typography variant="p" color="textSecondary">
              You can complete this challenge using:
            </Typography>
            {challenge.map((challenge) => (
              <List>
                {challenge.technologies.map((li) => (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <AssessmentIcon color="primary" />
                    <ListItem key={li}>{li}</ListItem>
                  </Box>
                ))}
              </List>
            ))}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
              }}
            >
              <Typography variant="h4">Assets and Design</Typography>
              <Typography variant="p" color="textSecondary">
                You will receive figma design and assets
              </Typography>

              <WebAssetIcon sx={{ fill: "#fcbf49" }} />
              <Link>Figma design</Link>
              <WebAssetIcon sx={{ fill: "#fcbf49" }} />
              <Link>Images</Link>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChallengeDetails;
