import React from "react";
import "../css/Home.css";

import react from "../../assets/react.png";
import javascript from "../../assets/javascript.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import nodejs from "../../assets/nodejs.png";
import sass from "../../assets/sass.png";
import { Link } from "react-router-dom";

const images = [html, css, react, javascript, nodejs, sass];

const Tech = () => {
  return (
    <div className="tech_section">
      <h1>Technologies We Cover</h1>
      <p>
        Explore the technologies we cover in-depth, including programming
        languages, frameworks, and tools
      </p>
      <div className="tech_list">
        {images.map((image) => (
          <div className="tech_item">
            <img src={image} alt="img" />
          </div>
        ))}
      </div>

      <Link className="btn_link">Get Started</Link>
    </div>
  );
};

export default Tech;
