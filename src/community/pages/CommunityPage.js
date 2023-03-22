import React, { useEffect, useState } from "react";
import Comment from "../components/Comment";
import Post from "../components/Post";
import { Container } from "@mui/system";

const CommunityPage = () => {
  const [comments, setcomments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/users/getComments`
        );

        const responseData = await response.json();
        setcomments(responseData.comments);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchComments();
  }, []);

  return (
    <Container sx={{ display: "flex", flexDirection: "column" }} maxWidth="lg">
      <Post comments={comments} />
      <Comment />
    </Container>
  );
};

export default CommunityPage;
