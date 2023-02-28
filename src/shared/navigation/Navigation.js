import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <ul className="header_menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tutorials">Tutorials</Link>
        </li>
        <li>
          <Link to="/challenges">Challenges</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <button className="header_register_button">Register</button>
    </header>
  );
};

export default Navigation;
