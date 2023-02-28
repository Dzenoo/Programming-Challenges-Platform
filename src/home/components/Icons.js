import React from "react";
import "../css/Home.css";

import icon1 from "../../assets/ico1.png";
import icon2 from "../../assets/ico2.png";
import icon3 from "../../assets/ico3.png";

const Icons = () => {
  return (
    <>
      <h1 className="icon_title">
        Boost your <span className="ch">Career</span>
      </h1>
      <div className="icon_section">
        <div className="icon_item">
          <img src={icon1} alt="ico1" />
          <h1>Learn Latest Technologies</h1>
          <p>
            Our website is dedicated to providing you with valuable resources
            and information that can help you improve your skills, learn new
            things, and overcome challenges.
          </p>
        </div>
        <div className="icon_item">
          <img src={icon2} alt="ico2" />
          <h1>Browse tutorials</h1>
          <p>
            Our platform offers a range of tutorials, courses, and articles that
            cover a variety of programming topics
          </p>
        </div>
        <div className="icon_item">
          <img src={icon3} alt="ico3" />
          <h1>Learn from challenges</h1>
          <p>
            Programming challenges are an excellent way to develop your skills,
            learn new techniques, and challenge yourself.
          </p>
        </div>
      </div>
    </>
  );
};

export default Icons;
