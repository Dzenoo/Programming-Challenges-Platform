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

            <div className="details_content">
              <h1>Details of Tutorial</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam id
                dolor nisi similique aperiam asperiores amet consectetur dolore
                voluptatem. Ullam deleniti error vero eaque sit rerum
                voluptatibus voluptates quas beatae? Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Nam id dolor nisi similique
                aperiam asperiores amet consectetur dolore voluptatem. Ullam
                deleniti error vero eaque sit rerum voluptatibus voluptates quas
                beatae? Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Nam id dolor nisi similique aperiam asperiores amet
                consectetur dolore voluptatem. Ullam deleniti error vero eaque
                sit rerum voluptatibus voluptates quas beatae?
              </p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default TutorialDetails;
