import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../css/tutorials.css";

const Tutorialnput = () => {
  return (
    <div className="tutorial_input">
      <h1>Empower Your Learning</h1>
      <p>
        Our tutorials cover a wide range of topics, including programming, web
        development, react, deployment, SEO, and more.
      </p>

      <div className="input">
        <AiOutlineSearch />
        <input type="text" placeholder="Find a tutorial" />
      </div>
    </div>
  );
};

export default Tutorialnput;
