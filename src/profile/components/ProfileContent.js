import {
  Card,
  Grid,
  InputLabel,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";

const ProfileContent = (props) => {
  const { first_name, last_name, email, number, level, xp } = props;

  const levelUpBasePoints = 100;
  const pointsNeededForNextLevel = levelUpBasePoints + (level - 1) * 100;
  const progress = (xp / pointsNeededForNextLevel) * 100;

  return (
    <Card>
      <Grid
        container
        alignItems="center"
        spacing={2}
        padding={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CircularProgress variant="determinate" value={progress} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              {`${Math.round(progress)}%`}
            </Typography>
          </Box>
        </Box>

        <Grid item>
          <div className="flex">
            <InputLabel>First name:</InputLabel>
            <Typography>
              <b>{first_name}</b>
            </Typography>
          </div>
        </Grid>

        <Grid item>
          <div className="flex">
            <InputLabel>Last Name:</InputLabel>
            <Typography>
              <b>{last_name}</b>
            </Typography>
          </div>
        </Grid>

        <Grid item>
          <div className="flex">
            <InputLabel>Email:</InputLabel>
            <Typography>
              <b>{email}</b>
            </Typography>
          </div>
        </Grid>

        <Grid item>
          <div className="flex">
            <InputLabel>Phone:</InputLabel>
            <Typography>
              <b>{number}</b>
            </Typography>
          </div>
        </Grid>

        <Grid item>
          <div className="flex">
            <InputLabel>Level:</InputLabel>
            <Typography>
              <b>{level}</b>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProfileContent;

ProfileContent.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
};
