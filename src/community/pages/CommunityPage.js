import React, { useEffect, useState } from "react";
import Comment from "../components/Comment";
import Post from "../components/Post";

const CommunityPage = () => {
  const [comments, setcomments] = useState([]);

  console.log(comments);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/users/getComments"
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
    <>
      <Post comments={comments} />
      <Comment />
    </>
  );
};

export default CommunityPage;
