import React from "react";
import "../css/Home.css";

import react from "../../assets/react.png";
import javascript from "../../assets/javascript.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import nodejs from "../../assets/nodejs.png";
import sass from "../../assets/sass.png";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const images = [html, css, react, javascript, nodejs, sass];

const Tech = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "12em",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">Technologies We Cover</Typography>
      <Typography variant="p">
        Explore the technologies we cover in-depth, including programming
        languages, frameworks, and tools
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          flexWrap: "wrap",
        }}
      >
        {images.map((image) => (
          <Box key={image}>
            <img src={image} alt="img" />
          </Box>
        ))}
      </Box>

      <Link className="btn_link">
        <Button variant="contained" size="large">
          Get Started
        </Button>
      </Link>
    </Box>
  );
};

export default Tech;
