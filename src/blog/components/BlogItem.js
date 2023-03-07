import React from "react";
import "../css/blog.css";
import PropTypes from "prop-types";
import { AiFillCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const TutorialItem = ({ tutorials }) => {
  return (
    <Container maxWidth="xl" sx={{ padding: "20px 0" }}>
      <Grid container spacing={4} justifyContent="center">
        {tutorials.map((tutorial) => (
          <Grid item key={tutorial.id} lg={4} md={6} sm={8} xs={12}>
            <Card
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <CardMedia
                image={tutorial.image}
                title={tutorial.title}
                sx={{ paddingTop: "56.25%" }}
              />
              <CardContent sx={{ flexGrow: "1", padding: "12px" }}>
                <Typography variant="h4" color="textPrimary">
                  {tutorial.title}
                </Typography>
                <Typography variant="h6" color="primary">
                  <AiFillCalendar />
                  {tutorial.date}
                </Typography>
                <Typography variant="p" color="textSecondary">
                  {tutorial.shortDescription}
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/tutorials/${tutorial.id}`}
                >
                  <Button>Read Blog</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

TutorialItem.propTypes = {
  tutorials: PropTypes.array.isRequired,
};

export default TutorialItem;
