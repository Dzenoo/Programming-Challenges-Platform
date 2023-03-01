import React from "react";
import "../css/tutorials.css";
import PropTypes from "prop-types";
import { AiFillCalendar } from "react-icons/ai";

const TutorialItem = ({ tutorials }) => {
  return (
    <div className="tutorial_list">
      {tutorials.map((tutorial) => (
        <div key={tutorial.id} className="tutorial_item">
          <img src={tutorial.image} alt={tutorial.title} />
          <div className="tutorial_item_text">
            <h1>{tutorial.title}</h1>
            <span>
              <AiFillCalendar />
              {tutorial.date}
            </span>
            <p>{tutorial.shortDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

TutorialItem.propTypes = {
  tutorials: PropTypes.array.isRequired,
};

export default TutorialItem;
