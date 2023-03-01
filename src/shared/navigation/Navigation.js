import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/home">Home</Link>
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
      <Link to="/auth" className="header_register_button">
        Register
      </Link>
    </header>
  );
};

export default Navigation;
