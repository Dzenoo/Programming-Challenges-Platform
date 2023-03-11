import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ChallengeContext } from "../../shared/context/ChallengeContext";

const ProfileChallenges = () => {
  const ch = useContext(ChallengeContext);

  return (
    <Grid container spacing={2}>
      {ch.startedChallenges.map((i) => (
        <Grid item key={i.id} xs={12} sm={7} lg={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              image={i.image}
              sx={{ paddingTop: "56.25%" }}
            ></CardMedia>
            <CardContent>
              <Typography variant="h4">{i.title}</Typography>
              <Typography variant="p" color="textSecondary">
                {i.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProfileChallenges;
