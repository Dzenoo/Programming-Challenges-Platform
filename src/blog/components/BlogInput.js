import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import "../css/blog.css";

const TutorialInput = ({ setInputValue, searchTutorials, searchMsg }) => {
  return (
    <form onSubmit={searchTutorials}>
      <TextField
        label="Search"
        onChange={(e) => setInputValue(e.target.value)}
        margin="normal"
        sx={{ width: "20em" }}
      >
        <p>{searchMsg}</p>
      </TextField>
    </form>
  );
};

export default TutorialInput;

TutorialInput.propTypes = {
  setInputValue: PropTypes.func.isRequired,
  searchTutorials: PropTypes.func.isRequired,
  searchMsg: PropTypes.string.isRequired,
};
