import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Post = () => {
  return (
    <Grid container spacing={2} justifyContent="center" padding={2}>
      <Grid item lg={4} md={6} sm={10} xs={12}>
        <Card
          sx={{
            padding: "12px",
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
              src="https://res.cloudinary.com/dzwb60tk1/image/upload/v1678535834/Untitled_design_3_zbm2cx.png"
              alt="img"
              style={{ width: "60px", height: "60px", borderRadius: "100%" }}
            />
            <Box>
              <Typography variant="h6">John Doe</Typography>
              <Typography variant="p">John00</Typography>
            </Box>
          </Box>
          <CardContent>
            <Box>
              <Typography variant="h4">Lorem Ipsum 🤔</Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore deleniti soluta nobis tenetur id, ratione ex eveniet
                vel totam veritatis, perspiciatis laborum voluptatem ea optio
                animi voluptate architecto rerum expedita?
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button>Like 0</Button>
            <Button>Reply</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Post;
