import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import "../css/Home.css";

const Newsletter = ({ tutorials }) => {
  return (
    <Container className="tutorialsContainer">
      <Typography variant="h2" textAlign="center">
        Browse some blog
      </Typography>
      <Container maxWidth="lg" sx={{ padding: "60px 0" }}>
        <Grid container spacing={4}>
          {tutorials.map((tutorial) => (
            <Grid item key={tutorial.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  image={tutorial.image}
                  title={tutorial.title}
                  sx={{ paddingTop: "56.25%" }}
                />
                <CardContent sx={{ flexGrow: "1" }}>
                  <Typography variant="h4">{tutorial.title}</Typography>
                  <Typography variant="p">
                    {tutorial.shortDescription}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    to={`/tutorials/${tutorial.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="outlined">Read More</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

Newsletter.propTypes = {
  tutorials: PropTypes.array.isRequired,
};

export default Newsletter;
