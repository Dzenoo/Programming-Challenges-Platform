import React from "react";
import { Typography, Box } from "@mui/material";
import icon1 from "../../assets/ico1.png";
import icon2 from "../../assets/ico2.png";
import icon3 from "../../assets/ico3.png";
import "../css/Home.css";

const textAlignStyle = {
  textAlign: "center",
};

const boxWidthStyle = {
  maxWidth: "500px",
};

const Icons = () => {
  return (
    <div className="icons_section">
      <Typography variant="h2" style={textAlignStyle}>
        Boost your <span className="ch">Career</span>
      </Typography>
      <Box
        style={textAlignStyle}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2em",
        }}
      >
        <Box style={boxWidthStyle}>
          <img src={icon1} alt="ico1" className="img" />
          <Typography variant="h4">Learn Latest Technologies</Typography>
          <Typography variant="p">
            Our website is dedicated to providing you with valuable resources
            and information that can help you improve your skills, learn new
            things, and overcome challenges.
          </Typography>
        </Box>

        <Box style={boxWidthStyle}>
          <img src={icon2} alt="ico2" className="img" />
          <Typography variant="h4">Browse blog</Typography>
          <Typography variant="p">
            Our platform offers a range of tutorials, courses, and articles that
            cover a variety of programming topics
          </Typography>
        </Box>

        <Box style={boxWidthStyle}>
          <img src={icon3} alt="ico3" className="img" />
          <Typography variant="h4">Learn from challenges</Typography>
          <Typography variant="p">
            Programming challenges are an excellent way to develop your skills,
            learn new techniques, and challenge yourself.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Icons;
