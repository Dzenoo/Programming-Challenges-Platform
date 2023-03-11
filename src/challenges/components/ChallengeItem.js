import React from "react";
import PropTypes from "prop-types";
import "../css/challenges.css";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Typography,
} from "@mui/material";

const ChallengeItem = ({ challenges }) => {
  return (
    <Container maxWidth="xl" sx={{ padding: "60px 0" }}>
      <Grid container spacing={4} justifyContent="center">
        {challenges.map((ch) => (
          <Grid item key={ch.id} lg={4} md={6} sm={8} xs={10}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                image={ch.image}
                title={ch.title}
                sx={{ paddingTop: "56.25%" }}
              />
              <CardContent sx={{ flexGrow: "1" }}>
                <Typography variant="h4" color="textPrimary">
                  {ch.title}
                </Typography>
                <Typography variant="p" color="textSecondary">
                  {ch.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
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
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/challenges/${ch.id}`}
                >
                  <Button variant="contained">View Challenge</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ChallengeItem;

ChallengeItem.propType = {
  challenges: PropTypes.array.isRequired,
};
