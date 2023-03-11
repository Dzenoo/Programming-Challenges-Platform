import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TutorialContext } from "../../shared/context/TutorialContext";
import "../css/blog.css";

const TutorialDetails = () => {
  const tutorialCtx = useContext(TutorialContext);
  const { tutorials } = tutorialCtx;
  const tutorialId = useParams().tid;
  const currTutorial = tutorials.filter((tut) => tut.id === tutorialId);
  return (
    <>
      <div className="tutorials_details_wrapper">
        {currTutorial.map((tuto) => (
          <>
            <div key={tuto.id} className="tutorial_details_item">
              <img src={tuto.image} alt={tuto.title} />
              <div className="tutorial_details_text">
                <h1>{tuto.title}</h1>
                <span>{tuto.date}</span>
                <h2>{tuto.shortDescription}</h2>
              </div>
            </div>

            <article
              className="details_content"
              dangerouslySetInnerHTML={{ __html: tuto.details }}
            ></article>
          </>
        ))}
      </div>
    </>
  );
};

export default TutorialDetails;
