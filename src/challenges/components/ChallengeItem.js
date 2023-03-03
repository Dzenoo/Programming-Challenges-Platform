import React from "react";
import PropTypes from "prop-types";
import "../css/challenges.css";
import { Link } from "react-router-dom";

const ChallengeItem = ({ challenges }) => {
  return (
    <ul className="challenge_list">
      {challenges.map((ch) => (
        <li className="challenge_item" key={ch.id}>
          <Link className="show_challenge" to={`/challenges/${ch.id}`}>
            <img src={ch.image} alt={ch.title} />
          </Link>
          <h1>{ch.title}</h1>
          <p>{ch.description}</p>
          <div className="tech">
            <span
              className={`${
                ch.difficulty === "Advanced" ? "advanced" : ""
              } && ${ch.difficulty === "Beginner" ? "beginner" : ""} && ${
                ch.difficulty === "Expert" ? "expert" : ""
              }`}
            >
              {ch.difficulty}
            </span>
            <div className="tech_flex">
              {ch.technologies.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ChallengeItem;

ChallengeItem.propType = {
  challenges: PropTypes.array.isRequired,
};
