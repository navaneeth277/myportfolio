import React from "react";
import "./Skills.css";
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaGitAlt, FaAws } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss, SiTypescript, SiExpress, SiPostgresql, SiKubernetes, SiDocker } from "react-icons/si"; // Added Kubernetes and Docker icons
const skillList = [
    { name: "React", proficiency: 70, icon: <FaReact /> },
    { name: "Node.js", proficiency: 70, icon: <FaNode /> },
    { name: "JavaScript", proficiency: 80, icon: <SiJavascript /> },
    { name: "HTML", proficiency: 98, icon: <FaHtml5 /> },
    { name: "CSS", proficiency: 50, icon: <FaCss3Alt /> },
    { name: "Git", proficiency: 90, icon: <FaGitAlt /> },
    { name: "MongoDB", proficiency: 60, icon: <SiMongodb /> },
    { name: "Express.js", proficiency: 85, icon: <SiExpress /> },
    { name: "PostgreSQL", proficiency: 70, icon: <SiPostgresql /> },
    { name: "AWS", proficiency: 30, icon: <FaAws /> },            // ✅ Fixed
    { name: "Kubernetes", proficiency: 20, icon: <SiKubernetes /> }, // ✅ Fixed
    { name: "Docker", proficiency: 65, icon: <SiDocker /> },        // ✅ Fixed
];

const Skills = ({ isDarkMode }) => {
    return (
        <section id="skills" className={`skills ${isDarkMode ? "dark" : ""}`}>
            <h1>My Skills</h1>
            <div className="skill-cards">
                {skillList.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-card-inner">
                            {/* Front Side */}
                            <div className="skill-card-front">
                                <div className="skill-icon">{skill.icon}</div>
                                <div className="skill-name">{skill.name}</div>
                            </div>
                            {/* Back Side */}
                            <div className="skill-card-back">
                                <div className="skill-proficiency">{skill.proficiency}%</div>
                                <div className="skill-name">{skill.name}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
