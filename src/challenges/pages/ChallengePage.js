import React, { useContext, useState } from "react";
import { ChallengeContext } from "../../shared/context/ChallengeContext";
import { AiOutlineCaretDown } from "react-icons/ai";
import ChallengeItem from "../components/ChallengeItem";
import "../css/challenges.css";
const ChallengePage = () => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const challengeCtx = useContext(ChallengeContext);
  const { filterChallenges, challengesHandler, findByDifficulty } =
    challengeCtx;
  const categories = ["React", "Css", "Html", "Node Js", "JavaScript", "Scss"];
  const difficulties = ["Beginner", "Advanced", "Expert"];

  return (
    <div className="challenges_container">
      <div className="filter_challenges">
        <div
          className="open_filter"
          onClick={() => setFilterIsOpen((prevState) => !prevState)}
        >
          <span>Filters</span>
          <AiOutlineCaretDown />
        </div>
        <div className={`filter_wrapper ${filterIsOpen ? "toggle" : ""}`}>
          <div className="filter_tech">
            <h2>Language</h2>
            {categories.map((btn) => (
              <button key={btn} onClick={() => filterChallenges(btn)}>
                {btn}
              </button>
            ))}
            <button onClick={challengesHandler}>All</button>
          </div>
          <div className="filter_difficulty">
            <h2>Difficulty</h2>
            {difficulties.map((dif) => (
              <button key={dif} onClick={() => findByDifficulty(dif)}>
                {dif}
              </button>
            ))}
          </div>
        </div>
      </div>
      <ChallengeItem challenges={challengeCtx.challenges} />
    </div>
  );
};

export default ChallengePage;
