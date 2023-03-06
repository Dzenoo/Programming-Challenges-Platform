import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import "../css/Home.css";

const Newsletter = ({ tutorials }) => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" textAlign="center">
        Browse some tutorials
      </Typography>
      <Container
        sx={{
          padding: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        {tutorials.map((tutorial) => (
          <Container maxWidth="xs" key={tutorial.id}>
            <img src={tutorial.image} alt={tutorial.title} />
            <Typography variant="h4">{tutorial.title}</Typography>
            <Typography variant="p">{tutorial.shortDescription}</Typography>
            <Link to={`/tutorials/${tutorial.id}`}>Read More</Link>
          </Container>
        ))}
      </Container>
      <Container
        sx={{
          width: "100%",
          padding: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
        }}
        className="newsletter"
      >
        <Container>
          <Typography variant="p">
            Stay up-to-date with the latest programming tutorials and blog posts
            from codinghero by subscribing to our newsletter. By signing up,
            you'll receive regular updates on new content, exclusive tips and
            tricks, and access to profile. If you're already a member, log in
            below to access your account and manage your subscription
            preferences.
          </Typography>
        </Container>
        <Link to="authenticate">
          <Button variant="contained" size="large">
            Register
          </Button>
        </Link>
      </Container>
    </Container>
  );
};

Newsletter.propTypes = {
  tutorials: PropTypes.array.isRequired,
};

export default Newsletter;
