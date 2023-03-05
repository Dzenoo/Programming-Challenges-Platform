import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import "../css/Home.css";

const heroStyles = {
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "2em",
};

const Hero = () => {
  return (
    <div className="hero_section">
      <Container maxWidth="md" style={heroStyles}>
        <Typography variant="h2">
          Welcome to <span className="ch">codinghero</span> your go-to source
          for programming tutorials and challenges.
        </Typography>
        <Typography variant="p" fontSize="20px">
          Whether you're a novice or an expert, we're here to help you grow your
          skills and stay on top of the latest trends. Our easy-to-follow
          tutorials will help you build your skills and stay up-to-date with
          latest technologies.
        </Typography>
        <Link to="/challenges" style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large">
            Start Now
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default Hero;
