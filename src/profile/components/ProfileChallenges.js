import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const ProfileChallenges = ({ challenges }) => {
  return (
    <Grid container spacing={2}>
      {challenges.map((challenge) => (
        <Grid
          item
          key={challenge._id}
          xs={12}
          sm={7}
          lg={4}
          alignItems="stretch"
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              image={challenge.image}
              sx={{ paddingTop: "56.25%" }}
            ></CardMedia>
            <CardContent>
              <Typography variant="h4">{challenge.title}</Typography>
              <Typography variant="p" color="textSecondary">
                {challenge.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProfileChallenges;
