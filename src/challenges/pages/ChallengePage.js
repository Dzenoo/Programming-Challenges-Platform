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
            <button onClick={() => filterChallenges("React")}>React</button>
            <button onClick={() => filterChallenges("Css")}>Css</button>
            <button onClick={() => filterChallenges("Html")}>Html</button>
            <button onClick={() => filterChallenges("Node Js")}>Node Js</button>
            <button onClick={() => filterChallenges("JavaScript")}>
              JavaScript
            </button>
            <button onClick={() => filterChallenges("Scss")}>Scss</button>
            <button onClick={challengesHandler}>All</button>
          </div>

          <div className="filter_difficulty">
            <h2>Difficulty</h2>
            <button onClick={() => findByDifficulty("Beginner")}>
              Beginner
            </button>
            <button onClick={() => findByDifficulty("Advanced")}>
              Advanced
            </button>
            <button onClick={() => findByDifficulty("Expert")}>Expert</button>
          </div>
        </div>
      </div>
      <ChallengeItem challenges={challengeCtx.challenges} />
    </div>
  );
};

export default ChallengePage;
