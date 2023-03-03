import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navigation.css";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "changeColor" : ""}`}>
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
