import { Card, Grid, InputLabel, TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const ProfileContent = (props) => {
  const { first_name, last_name, email, number } = props;

  return (
    <Card>
      <Grid container alignItems="center" spacing={2} padding={2}>
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
      </Grid>
    </Card>
  );
};

export default ProfileContent;

ProfileContent.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
