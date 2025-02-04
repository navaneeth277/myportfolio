import React from "react";
import "./Projects.css";
import Im from "../public/image.png"
import Im1 from "../public/dod.png"
import Im2 from "../public/To_do.png"
import Im3 from "../public/Exper.png"

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Expre - Exam Preparation Assistant",
      description: "Expre is a web app built with React, Node.js, and the Gemini API to help with exam preparation. It includes features like summarizing content, extracting keywords, writing essays, and coding in languages like C++, Java, Python, and C. It’s designed with sections for questions, materials, and coding to make studying easier for students.",
      image: Im3,// Use public folder images directly
      github: "https://github.com/Navaneeth2707/",
      demo: "https://expre-frountend-taupe.vercel.app/",
    },
    {
      title: "To Do List",
      description: "Your to-do list app is a simple and user-friendly tool built using React. It allows users to add, edit, and delete tasks, helping them stay organized and manage their daily activities efficiently.",
      image: Im2,
      github: "https://github.com/Navaneeth2707/To_Do_List",
      demo: "https://link_to_project_demo.com",
    },
    {
      title: "Find date using date",
      description: "The Find Date feature calculates a future or past date based on a given date. It simplifies date-based planning by allowing users to add or subtract days from the selected date easily.",
      image: Im1,
      github: "https://github.com/Navaneeth2707/Day-of-Date",
      demo: "https://link_to_project_demo.com",
    },
  ];

  return (
    <section id="projects" className={`projects ${isDarkMode ? "dark" : ""}`}>
      <h1>My Projects</h1>
      <p>Explore some of the innovative solutions I've built.</p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${isDarkMode ? "dark" : ""}`}
          >
            <img src={project.image} alt={`${project.title} Screenshot`} />
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDarkMode ? "dark" : ""}
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDarkMode ? "dark" : ""}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
