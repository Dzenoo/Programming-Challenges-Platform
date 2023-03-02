import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_grid">
        <div className="footer_column1">
          <h1>About Us</h1>
          <p>
            Codinghero is your go-to source for programming tutorials and blogs.
            Our mission is to help you build your skills and stay on top of the
            latest trends in programming.
          </p>
        </div>
        <div className="footer_column2">
          <h1>Contact Us</h1>
          <p>
            If you have any questions or feedback, please don't hesitate to get
            in touch with us. You can reach us by emailing codinghero@gmail.com
            or by following us on social media.
          </p>
        </div>
        <div className="footer_column3">
          <h1>Stay Connected</h1>
          <p>
            Follow us on social media to stay up-to-date with the latest
            tutorials and blog posts from codinghero. You can find us on:
          </p>
          <ul>
            <li>Instagram</li>
            <li>Discord</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      <p style={{ textAlign: "center", paddingBottom: "40px" }}>
        Copyright © 2023 codinghero. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
