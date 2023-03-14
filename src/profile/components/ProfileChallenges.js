import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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

            <CardActions>
              <Link
                style={{ textDecoration: "none" }}
                to={`/challenge/submit/${challenge._id}`}
              >
                <Button variant="contained">Submit challenge</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProfileChallenges;
