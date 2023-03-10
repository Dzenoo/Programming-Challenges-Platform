import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Input from "./Input";
import formImg from "../../assets/form.png";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MATCH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validate";

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
              {/* FIRST NAME */}
              {authMode && (
                <Input
                  validators={[VALIDATOR_REQUIRE()]}
                  label="First Name"
                  type="text"
                  errorText="Please enter valid first name (not empty)"
                />
              )}

              {/* LAST NAME */}
              {authMode && (
                <Input
                  validators={[VALIDATOR_REQUIRE()]}
                  type="text"
                  errorText="Please enter valid last name (not empty)"
                  label="Last Name"
                />
              )}

              {/*  USERNAME */}
              {authMode && (
                <Input
                  validators={[VALIDATOR_MINLENGTH(3)]}
                  errorText="Please enter valid username (min. 3)"
                  label="Username"
                  type="text"
                />
              )}

              {/* EMAIL */}
              <Input
                validators={[VALIDATOR_EMAIL()]}
                errorText="Please enter valid email (include @ and .com)"
                label="Email"
                type="email"
              />

              {/* NUMBER */}
              {authMode && (
                <Input
                  validators={[VALIDATOR_MINLENGTH(6)]}
                  label="Number"
                  errorText="Please enter valid number (min. 6)"
                  type="number"
                />
              )}
              {/* PASSWORD */}
              <Input
                validators={[VALIDATOR_MINLENGTH(6)]}
                label="Password"
                errorText="Please enter valid passsword (min. 6)"
                type="password"
              />

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
