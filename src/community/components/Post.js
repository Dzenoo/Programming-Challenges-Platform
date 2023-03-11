import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { CommunityContext } from "../../shared/context/CommunityContext";

const Post = () => {
  const comCtx = useContext(CommunityContext);
  const { CommentUsers } = comCtx;

  return (
    <Grid container spacing={2} justifyContent="center" padding={2}>
      {CommentUsers.map((comment) => (
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
                src={comment.image}
                alt={comment.title}
                style={{ width: "60px", height: "60px", borderRadius: "100%" }}
              />
              <Box>
                <Typography variant="h6">
                  {`${comment.first_name} ${comment.last_name}`}
                </Typography>
                <Typography variant="p">{comment.user_name}</Typography>
              </Box>
            </Box>
            <CardContent>
              <Box>
                <Typography variant="h4">{comment.title}</Typography>
                <Typography variant="p">{comment.comment}</Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button>Like 0</Button>
              <Button>Reply</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Post;
