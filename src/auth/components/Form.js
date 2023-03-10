import {
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import formImg from "../../assets/form.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [authMode, setAuthMode] = useState(true);

  const switchMode = () => {
    setAuthMode(!authMode);
  };

  return (
    <div className="form">
      <Container maxWidth="lg" sx={{ padding: "40px 0" }}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CardMedia image={formImg} sx={{ padding: "38.45% 18%" }} />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "40px",
              gap: "2em",
            }}
          >
            <Typography variant="h3">
              {authMode ? "Register" : "Log in"}
            </Typography>
            <Typography variant="h6">Access your account now</Typography>
            <Typography variant="p" color="textSecondary">
              Sign in now to unlock the full potential of our programming
              learning platform. Gain access to premium content, personalized
              recommendations, progress tracking, and community features.
            </Typography>
            <form className="auth_form">
              {authMode && (
                <TextField label="First Name" id="First Name" margin="normal" />
              )}
              {authMode && (
                <TextField label="Last Name" id="Last Name" margin="normal" />
              )}
              <TextField label="Email" id="Email" margin="normal" />
              {authMode && <TextField label="Number" type="number" />}
              <TextField label="Password" type="password" />
              {authMode && (
                <TextField label="Confirm Password" type="password" />
              )}
              <Button variant="contained" size="large" type="submit">
                {authMode ? "Create Account" : "Login"}
              </Button>
            </form>
            <Typography>
              {authMode ? "Already have an account?" : "Don't have an account?"}{" "}
              <Link
                onClick={switchMode}
                style={{ color: "blue", textDecoration: "none" }}
              >
                {authMode ? "Log in" : "Register"}
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Form;
