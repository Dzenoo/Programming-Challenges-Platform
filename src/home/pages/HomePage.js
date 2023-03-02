import React, { useContext } from "react";
import Hero from "../components/Hero";
import Icons from "../components/Icons";
import Newsletter from "../components/Newsletter";
import Tech from "../components/Tech";
import "../css/Home.css";
import { TutorialContext } from "../../shared/context/TutorialContext";

const HomePage = () => {
  const tutorialsCtx = useContext(TutorialContext);
  const { tutorials } = tutorialsCtx;

  const someTutorials = tutorials.slice(1, 4);

  return (
    <>
      <Hero />
      <Icons />
      <Tech />
      <Newsletter tutorials={someTutorials} />
    </>
  );
};

export default HomePage;
