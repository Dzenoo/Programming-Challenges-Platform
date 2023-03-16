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

  return (
    <Card>
      <Grid container alignItems="center" spacing={2} padding={2}>
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress variant="determinate" value={xp} />
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
              {`${Math.round(xp)}%`}
            </Typography>
          </Box>
        </Box>

        <Grid item lg={3}>
          <InputLabel>First Name</InputLabel>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            value={first_name}
          ></TextField>
        </Grid>

        <Grid item>
          <InputLabel>Last Name</InputLabel>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            value={last_name}
          ></TextField>
        </Grid>

        <Grid item>
          <InputLabel>Email</InputLabel>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            value={email}
          ></TextField>
        </Grid>

        <Grid item>
          <InputLabel>Phone</InputLabel>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            value={number}
          ></TextField>
        </Grid>

        <Grid item>
          <InputLabel>Level</InputLabel>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            value={level}
          ></TextField>
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
