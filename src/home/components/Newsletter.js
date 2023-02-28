import React from "react";
import PropTypes from "prop-types";

import "../css/Home.css";
import { Link } from "react-router-dom";

const Newsletter = ({ tutorials }) => {
  return (
    <div className="newsletter_tutorials_section">
      <h1>Browse some tutorials</h1>
      <div className="tutorials">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="tutorial">
            <img src={tutorial.image} alt={tutorial.title} />
            <h1>{tutorial.title}</h1>
            <p>{tutorial.description}</p>
          </div>
        ))}
      </div>

      <div className="newsletter">
        <div className="new_text">
          <p>
            Stay up-to-date with the latest programming tutorials and blog posts
            from codinghero by subscribing to our newsletter. By signing up,
            you'll receive regular updates on new content, exclusive tips and
            tricks, and access to profile. If you're already a member, log in
            below to access your account and manage your subscription
            preferences.
          </p>
        </div>

        <Link>Register</Link>
      </div>
    </div>
  );
};

Newsletter.propTypes = {
  tutorials: PropTypes.array.isRequired,
};

export default Newsletter;
