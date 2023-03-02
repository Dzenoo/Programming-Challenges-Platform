import React from "react";
import Hero from "../components/Hero";
import Icons from "../components/Icons";
import Newsletter from "../components/Newsletter";
import Tech from "../components/Tech";
import "../css/Home.css";

const Tutorials = [
  {
    id: 1,
    title: "Tutorial 1",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482337/Untitled_design_4_jcnmzr.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci cupiditate aperiam facere hic dicta maiores aliquid. Temporibus dolor, optio nam iusto debitis alias ipsum ut doloremque, minus libero nostrum sunt.",
  },
  {
    id: 2,
    title: "Tutorial 2",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676482330/Untitled_design_3_giwyy7.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci cupiditate aperiam facere hic dicta maiores aliquid. Temporibus dolor, optio nam iusto debitis alias ipsum ut doloremque, minus libero nostrum sunt.",
  },
  {
    id: 3,
    title: "Tutorial 3",
    image:
      "https://res.cloudinary.com/dzwb60tk1/image/upload/v1676481608/Untitled_design_2_qf0fri.png",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci cupiditate aperiam facere hic dicta maiores aliquid. Temporibus dolor, optio nam iusto debitis alias ipsum ut doloremque, minus libero nostrum sunt.",
  },
];
const HomePage = () => {
  return (
    <>
      <Hero />
      <Icons />
      <Tech />
      <Newsletter tutorials={Tutorials} />
    </>
  );
};

export default HomePage;
