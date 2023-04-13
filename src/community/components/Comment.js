import React, { useContext } from "react";
import { Button, Box, Typography, Card } from "@mui/material";
import { Container } from "@mui/system";
import { useForm } from "../../shared/hooks/formhook";
import { VALIDATOR_REQUIRE } from "../../shared/util/validate";
import { AuthContext } from "../../shared/context/AuthContext";
import Input from "../../auth/components/Input";

const Comment = () => {
  const { profile, userId } = useContext(AuthContext);
  const { first_name, user_name, image } = profile;
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      message: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const newCommentHandler = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users/${userId}/newComment`,
        {
          method: "POST",
          body: JSON.stringify({
            title: formState.inputs.title.value,
            message: formState.inputs.message.value,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        padding: "40px 0",
      }}
    >
      <Card
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "2em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            src={image}
            alt="img"
            style={{ width: "60px", height: "60px", borderRadius: "100%" }}
          />
          <Box>
            <Typography variant="h6">{first_name}</Typography>
            <Typography variant="p">{user_name}</Typography>
          </Box>
        </Box>

        <form
          onSubmit={newCommentHandler}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Input
            label="Title"
            onInput={inputHandler}
            id="title"
            validators={[VALIDATOR_REQUIRE()]}
            type="text"
            errorText="Please enter valid title"
          ></Input>
          <Input
            label="Message"
            onInput={inputHandler}
            id="message"
            validators={[VALIDATOR_REQUIRE()]}
            type="text"
            errorText="Please enter valid message"
          ></Input>
          <Button variant="contained" type="submit">
            Post
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Comment;
