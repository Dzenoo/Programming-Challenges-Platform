import React from "react";
import Tutorialnput from "../components/TutorialInput";
import TutorialItem from "../components/TutorialItem";
import "../css/tutorials.css";

const Tutorials = [
  {
    id: 0,
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "How to do something in Angular",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
  },
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "How to do something in React",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    title: "How to do something in JavaScript",
    date: "10.02.2022",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at quod optio? Perspiciatis temporibus tempore fugiat repudiandae, eos placeat totam qui officiis culpa aut dolorum omnis ratione inventore vitae deleniti?",
  },
];

const TutorialPage = () => {
  return (
    <>
      <div className="tutorial_page">
        <Tutorialnput />
        <TutorialItem tutorials={Tutorials} />
      </div>
    </>
  );
};

export default TutorialPage;
