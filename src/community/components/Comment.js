import { Button, TextField, Box, Typography, Card } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext } from "react";
import { CommunityContext } from "../../shared/context/CommunityContext";

const Comment = () => {
  const comCtx = useContext(CommunityContext);
  const { CommentUsers } = comCtx;

  return (
    <Container maxWidth="md" sx={{ padding: "40px 0" }}>
      <Card
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "2em",
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
        <TextField label="Title" fullWidth></TextField>
        <textarea placeholder="New Comment...."></textarea>
        <Button variant="contained">Post</Button>
      </Card>
    </Container>
  );
};

export default Comment;
