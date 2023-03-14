import { Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { TutorialContext } from "../../shared/context/TutorialContext";
import Pagination from "../../shared/navigation/Pagination";
import BlogInput from "../components/BlogInput";
import BlogItem from "../components/BlogItem";
import "react-toastify/dist/ReactToastify.css";
import "../css/blog.css";

const TutorialPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tutorialsPerPage] = useState(3);
  const tutorialCtx = useContext(TutorialContext);
  const {
    tutorials,
    setInputQuery,
    searchTutorialsHandler,
    searchError,
    selectedTutorials,
  } = tutorialCtx;

  const indexOfLastTutorial = currentPage * tutorialsPerPage;
  const indexOfFirstTutorial = indexOfLastTutorial - tutorialsPerPage;
  const currentTutorials = selectedTutorials.slice(
    indexOfFirstTutorial,
    indexOfLastTutorial
  );

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <div className="tutorial_page">
        <Typography variant="h2" color="textPrimary">
          Empower Your Learning
        </Typography>
        <Typography variant="p" color="textSecondary">
          Our tutorials cover a wide range of topics
        </Typography>
        <BlogInput
          setInputValue={setInputQuery}
          searchTutorials={searchTutorialsHandler}
          searchMsg={searchError}
        />
        <BlogItem tutorials={currentTutorials} />
        <Pagination
          tutoPerPage={tutorialsPerPage}
          totalTutorials={tutorials.length}
          paginate={paginate}
        />
        <ToastContainer />
      </div>
    </>
  );
};

export default TutorialPage;
