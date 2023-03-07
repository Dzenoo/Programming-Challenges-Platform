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
    <Container maxWidth="lg">
      <Typography variant="h2" textAlign="center">
        Browse some tutorials
      </Typography>
      <Container maxWidth="" sx={{ padding: "20px 0" }}>
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
