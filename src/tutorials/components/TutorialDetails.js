import React from "react";
import { useParams } from "react-router-dom";
import "../css/tutorials.css";
const Tutorials = [
  {
    id: "0",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "How to do something in Angular",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
    details: "Some details 1",
  },
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "How to do something in React",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
    details: "Some details 2",
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "How to do something in JavaScript",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
    details: "Some details 3",
  },
];

const TutorialDetails = () => {
  const tutorialId = useParams().tid;
  const currTutorial = Tutorials.filter((tut) => tut.id === tutorialId);

  return (
    <div>
      {currTutorial.map((tuto) => (
        <div key={tuto.id}>
          <img src={tuto.image} alt="img" />
          <h1>{tuto.details}</h1>
          <h1>{tuto.title}</h1>
          <h2>{tuto.shortDescription}</h2>
        </div>
      ))}
    </div>
  );
};

export default TutorialDetails;
