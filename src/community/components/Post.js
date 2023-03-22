import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import { Box } from "@mui/system";
import React, { useState } from "react";

const Post = ({ comments }) => {
  const [like, setlike] = useState(0);

  return (
    <Grid container spacing={2} justifyContent="center" padding={2}>
      {comments.map((comment) => (
        <Grid key={comment.id} item md={6} sm={10} xs={12} lg={12}>
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
                src={comment.user.image}
                alt={comment.title}
                style={{ width: "60px", height: "60px", borderRadius: "100%" }}
              />
              <Box>
                <Typography variant="h6">
                  {`${comment.user.first_name} ${comment.user.last_name}`}
                </Typography>
                <Typography variant="p">{comment.user.user_name}</Typography>
              </Box>
            </Box>
            <CardContent>
              <Box>
                <Typography variant="h4">{comment.title}</Typography>
                <Typography variant="p">{comment.comment}</Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button disabled={like} onClick={() => setlike(like + 1)}>
                Like {like}
              </Button>
              <Button>Reply</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Post;
