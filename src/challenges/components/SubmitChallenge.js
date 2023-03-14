import {
  Button,
  FormControl,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const SubmitChallenge = () => {
  return (
    <Container maxWidth="md" sx={{ padding: "40px 0" }}>
      <Paper sx={{ padding: "40px" }}>
        <form style={{ display: "flex", flexDirection: "column", gap: "2em" }}>
          <div className="form_control">
            <Typography variant="h6" color="textPrimary">
              Title*
            </Typography>
            <Typography variant="p" color="textSecondary">
              Enter the title of challenge you do
            </Typography>
            <FormControl>
              <InputLabel>e.g Weather App</InputLabel>
              <TextField />
            </FormControl>
          </div>

          <div className="form_control">
            <Typography variant="h6" color="textPrimary">
              Github Repository*
            </Typography>
            <Typography variant="p" color="textSecondary">
              If your project is hosted on GitHub, enter the URL to your
              repository here.
            </Typography>
            <FormControl>
              <InputLabel>e.g https/Github.com/challengeName</InputLabel>
              <TextField />
            </FormControl>
          </div>

          <div className="form_control">
            <Typography variant="h6" color="textPrimary">
              Site URL*
            </Typography>
            <Typography variant="p" color="textSecondary">
              If your project is hosted online, enter the URL to your live site
              here.
            </Typography>
            <FormControl>
              <InputLabel>e.g https://challengeurl.netlify.app</InputLabel>
              <TextField />
            </FormControl>
          </div>

          <div className="form_control">
            <Typography variant="h6" color="textPrimary">
              Description*
            </Typography>
            <Typography variant="p" color="textSecondary">
              Provide a brief description of your project (max 250 characters).
            </Typography>
            <FormControl>
              <textarea
                maxLength={250}
                placeholder="Description...."
              ></textarea>
            </FormControl>
          </div>

          <Button variant="contained" size="large">
            Submit Challenge
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SubmitChallenge;
