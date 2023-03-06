import { Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Grid container spacing={12} padding={10}>
        <Grid item xs={4}>
          <Typography variant="h4">About Us</Typography>
          <Typography variant="p">
            Codinghero is your go-to source for programming tutorials and blogs.
            Our mission is to help you build your skills and stay on top of the
            latest trends in programming.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h4">Contact Us</Typography>
          <Typography variant="p">
            If you have any questions or feedback, please don't hesitate to get
            in touch with us. You can reach us by emailing codinghero@gmail.com
            or by following us on social media.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h4">Stay Connected</Typography>
          <Typography variant="p">
            Follow us on social media to stay up-to-date with the latest
            tutorials and blog posts from codinghero. You can find us on:
          </Typography>
          <List>
            <ListItem>Instagram</ListItem>
            <ListItem>Discord</ListItem>
            <ListItem>Facebook</ListItem>
          </List>
        </Grid>
      </Grid>

      <Typography variant="p" textAlign="center">
        Copyright © 2023 codinghero. All rights reserved.
      </Typography>
    </>
  );
};

export default Footer;
