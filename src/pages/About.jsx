import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About Goal Tracker</h1>
      <div className="image-container">
        <img src="/images/goal.png" alt="Goal Tracking" />
      </div>
      <div className="about-content">
        <h2>Your Personal Goal Companion</h2>
        <p>
          Goal Tracker helps you turn your aspirations into achievements with a
          simple, intuitive interface for setting and tracking daily goals.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Visual goal tracking with custom icons</li>
          <li>Dark/light theme for comfortable viewing</li>
          <li>Progress sharing capabilities</li>
          <li>Simple, distraction-free interface</li>
        </ul>

        <h2>Get Started</h2>
        <p>
          Check out our <Link to="/how-to">quick start guide</Link> or jump
          right in and create your first goal! Need help?
          <Link to="/contact"> Contact us</Link>.
        </p>
      </div>
    </>
  );
};

export default About;
