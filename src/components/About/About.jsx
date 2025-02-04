import React from "react";
import "./About.css";  // Ensure to use the updated CSS
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Im from "../public/image.png"

const About = ({ isDarkMode }) => {
  return (
    <section id="about" className={`about ${isDarkMode ? "dark" : ""}`}>
      <div className="content">
        {/* Profile Image */}
        <div className="image-container">
          <img
            src={Im}  // Replace with your image path
            alt="Profile"
            className="profile-image"
          />
        </div>

        {/* Bio Content */}
        <div className="bio">
          <h1>Hello, I'm Navaneeth</h1>
          <p>
            I'm a passionate web developer who loves building intuitive, responsive, and creative web applications. Let's collaborate and create something amazing together!
          </p>
          
          {/* Social Links */}
          <div className="social-links">
            <a href="https://github.com/navaneeth2707/" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/navaneeth277/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/navaneeth277/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
