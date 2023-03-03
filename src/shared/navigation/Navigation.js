import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <ul className="header_menu">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/challenges"
          >
            Challenges
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/tutorials"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/"
          >
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/"
          >
            Community
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/"
          >
            Pricing
          </NavLink>
        </li>
      </ul>

      <div style={{ display: "flex", gap: "12px" }}>
        <NavLink to="/signup" className="header_register_button">
          Register
        </NavLink>
        <NavLink to="/login" className="header_login_button">
          Login
        </NavLink>
      </div>
    </header>
  );
};

export default Navigation;
