import React from "react";
import PropTypes from "prop-types";
import "../css/challenges.css";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

const ChallengeItem = ({ challenges }) => {
  return (
    <Grid container spacing={7} padding={8}>
      {challenges.map((ch) => (
        <Grid item xs={3} key={ch.id}>
          <Link className="linkDecoration" to={`/challenges/${ch.id}`}>
            <img src={ch.image} alt={ch.title} />
          </Link>
          <Typography variant="h4">{ch.title}</Typography>
          <Typography variant="p">{ch.description}</Typography>
          <Box className="tech">
            <Typography
              variant="span"
              className={`${
                ch.difficulty === "Advanced" ? "advanced" : ""
              } && ${ch.difficulty === "Beginner" ? "beginner" : ""} && ${
                ch.difficulty === "Expert" ? "expert" : ""
              }`}
            >
              {ch.difficulty}
            </Typography>
            <Box className="tech_flex">
              {ch.technologies.map((t) => (
                <Typography variant="span" key={t}>
                  {t}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ChallengeItem;

ChallengeItem.propType = {
  challenges: PropTypes.array.isRequired,
};
