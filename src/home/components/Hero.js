import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const Hero = () => {
  return (
    <div className="hero_section">
      <div className="hero_text">
        <h1>
          Welcome to <span className="ch">codinghero</span> your go-to source
          for programming tutorials and challenges.
        </h1>
        <p>
          Whether you're a novice or an expert, we're here to help you grow your
          skills and stay on top of the latest trends. Our easy-to-follow
          tutorials will help you build your skills and stay up-to-date with
          latest technologies.
        </p>
        <Link className="btn_link">Start Now</Link>
      </div>
    </div>
  );
};

export default Hero;
