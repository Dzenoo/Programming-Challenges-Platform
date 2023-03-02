import React, { useContext, useState } from "react";
import { TutorialContext } from "../../shared/context/TutorialContext";
import Pagination from "../../shared/navigation/Pagination";
import TutorialInput from "../components/TutorialInput";
import TutorialItem from "../components/TutorialItem";
import "../css/tutorials.css";

const TutorialPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tutorialsPerPage] = useState(3);
  const tutorialCtx = useContext(TutorialContext);
  const { tutorials, setInputQuery, searchTutorialsHandler, searchError } =
    tutorialCtx;

  const indexOfLastTutorial = currentPage * tutorialsPerPage;
  const indexOfFirstTutorial = indexOfLastTutorial - tutorialsPerPage;
  const currentTutorials = tutorials.slice(
    indexOfFirstTutorial,
    indexOfLastTutorial
  );

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <div className="tutorial_page">
        <TutorialInput
          setInputValue={setInputQuery}
          searchTutorials={searchTutorialsHandler}
          searchMsg={searchError}
        />
        <TutorialItem tutorials={currentTutorials} />
        <Pagination
          tutoPerPage={tutorialsPerPage}
          totalTutorials={tutorials.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default TutorialPage;
