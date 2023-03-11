import { Card, Grid, InputLabel, TextField } from "@mui/material";
import React from "react";

const ProfileContent = () => {
  return (
    <Card>
      <Grid container alignItems="center" spacing={2} padding={2}>
        <Grid item lg={3}>
          <InputLabel>First Name</InputLabel>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            value="Dzenis"
          ></TextField>
        </Grid>

        <Grid item>
          <InputLabel>Last Name</InputLabel>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            value="Gudzevic"
          ></TextField>
        </Grid>

        <Grid item>
          <InputLabel>Email</InputLabel>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            value="dgudzevic00@gmail.com"
          ></TextField>
        </Grid>

        <Grid item>
          <InputLabel>Phone</InputLabel>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            value="06006006"
          ></TextField>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProfileContent;
