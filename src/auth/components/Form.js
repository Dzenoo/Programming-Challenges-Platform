import React, { useContext, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../shared/hooks/formhook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validate";
import formImg from "../../assets/form.png";
import Input from "./Input";
import { AuthContext } from "../../shared/context/AuthContext";
import { FadeLoader } from "react-spinners";

const Form = () => {
  const [authMode, setAuthMode] = useState(true);
  const [isLoading, setisLoading] = useState(false);
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
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const switchMode = () => {
    setAuthMode(!authMode);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();

    setisLoading(true);

    if (authMode) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/users/signup`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              first_name: formState.inputs.first_name.value,
              last_name: formState.inputs.last_name.value,
              user_name: formState.inputs.user_name.value,
              email: formState.inputs.email.value,
              number: formState.inputs.number.value,
              password: formState.inputs.password.value,
            }),
          }
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        auth.login(responseData.userId, responseData.token);
        setisLoading(false);
        navigate("/");
      } catch (err) {
        setisLoading(false);
        alert(err.message || "Something went wrong, please try again");
      }
    } else {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/users/login`,
          {
            method: "POST",
            body: JSON.stringify({
              email: formState.inputs.email.value,
              password: formState.inputs.password.value,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        auth.login(responseData.userId, responseData.token);
        navigate("/");
      } catch (err) {
        setisLoading(false);
        alert("Something went wrong, please try again");
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ padding: "40px 0" }}>
      {isLoading && (
        <div className="loader">
          <FadeLoader color={"#1976d2"} size={30} />
        </div>
      )}
      <Card
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
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
          <form className="auth_form" onSubmit={submitFormHandler}>
            {/* FIRST NAME */}
            {authMode && (
              <Input
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                label="First Name"
                type="text"
                errorText="Please enter valid first name (not empty)"
                id="first_name"
              />
            )}

            {/* LAST NAME */}
            {authMode && (
              <Input
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
                label="Last Name"
                type="text"
                errorText="Please enter valid last name (not empty)"
                id="last_name"
              />
            )}

            {/*  USERNAME */}
            {authMode && (
              <Input
                validators={[VALIDATOR_MINLENGTH(3)]}
                onInput={inputHandler}
                type="text"
                errorText="Please enter valid username (min. 3)"
                label="Username"
                id="user_name"
              />
            )}

            {/* EMAIL */}
            <Input
              validators={[VALIDATOR_EMAIL()]}
              onInput={inputHandler}
              type="email"
              errorText="Please enter valid email (include @ and .com)"
              label="Email"
              id="email"
            />

            {/* NUMBER */}
            {authMode && (
              <Input
                validators={[VALIDATOR_MINLENGTH(6)]}
                onInput={inputHandler}
                type="number"
                errorText="Please enter valid number (min. 6)"
                label="Number"
                id="number"
              />
            )}
            {/* PASSWORD */}
            <Input
              validators={[VALIDATOR_MINLENGTH(6)]}
              onInput={inputHandler}
              type="password"
              errorText="Please enter valid passsword (min. 6)"
              label="Password"
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
