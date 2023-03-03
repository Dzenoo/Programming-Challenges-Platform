import React from "react";
import PropTypes from "prop-types";
import { AiOutlineSearch } from "react-icons/ai";
import "../css/blog.css";

const TutorialInput = ({ setInputValue, searchTutorials, searchMsg }) => {
  return (
    <div className="tutorial_input">
      <h1>Empower Your Learning</h1>
      <p>Our tutorials cover a wide range of topics</p>
      <form className="input" onSubmit={searchTutorials}>
        <AiOutlineSearch onClick={searchTutorials} />
        <input
          type="text"
          placeholder="Find a tutorial"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <p>{searchMsg}</p>
    </div>
  );
};

export default TutorialInput;

TutorialInput.propTypes = {
  setInputValue: PropTypes.func.isRequired,
  searchTutorials: PropTypes.func.isRequired,
  searchMsg: PropTypes.string.isRequired,
};
