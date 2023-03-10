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
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validate";
import { useForm } from "../../shared/hooks/formhook";

const Form = () => {
  const [authMode, setAuthMode] = useState(true);
  const [formState, inputHandler] = useForm(
    {
      first_name: {
        value: "",
        isValid: false,
      },
      last_name: {
        value: "",
        isValid: false,
      },
      user_name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      number: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchMode = () => {
    setAuthMode(!authMode);
  };

  return (
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
          {/* CARD TITLES */}
          <Typography variant="h3">
            {authMode ? "Register" : "Log in"}
          </Typography>
          <Typography variant="h6">Access your account now</Typography>
          <Typography variant="p" color="textSecondary">
            Sign in now to unlock the full potential of our programming learning
            platform. Gain access to premium content, personalized
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
                id="first_name"
                onInput={inputHandler}
              />
            )}

            {/* LAST NAME */}
            {authMode && (
              <Input
                validators={[VALIDATOR_REQUIRE()]}
                type="text"
                errorText="Please enter valid last name (not empty)"
                id="last_name"
                onInput={inputHandler}
                label="Last Name"
              />
            )}

            {/*  USERNAME */}
            {authMode && (
              <Input
                validators={[VALIDATOR_MINLENGTH(3)]}
                errorText="Please enter valid username (min. 3)"
                label="Username"
                onInput={inputHandler}
                id="user_name"
                type="text"
              />
            )}

            {/* EMAIL */}
            <Input
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please enter valid email (include @ and .com)"
              onInput={inputHandler}
              id="email"
              label="Email"
              type="email"
            />

            {/* NUMBER */}
            {authMode && (
              <Input
                validators={[VALIDATOR_MINLENGTH(6)]}
                label="Number"
                errorText="Please enter valid number (min. 6)"
                onInput={inputHandler}
                type="number"
                id="number"
              />
            )}
            {/* PASSWORD */}
            <Input
              validators={[VALIDATOR_MINLENGTH(6)]}
              label="Password"
              errorText="Please enter valid passsword (min. 6)"
              onInput={inputHandler}
              type="password"
              id="password"
            />

            <Button variant="contained" size="large" type="submit">
              {authMode ? "Create Account" : "Login"}
            </Button>
          </form>

          {/* ACTIONS TEXT */}
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
  );
};

export default Form;
