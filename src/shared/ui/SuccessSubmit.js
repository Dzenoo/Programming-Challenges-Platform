import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import successImage from "../../assets/success.png";

const SuccessSubmit = () => {
  return (
    <div className="successPage">
      <img src={successImage} alt="succcesImg" />
      <Typography variant="h3">You submitted Challenge!</Typography>
      <Typography variant="p">
        You submitted your challenge! Don't stop here, submit more challenges
        and level up!
      </Typography>
      <Link to="/challenges">Go to challenges</Link>
    </div>
  );
};

export default SuccessSubmit;
