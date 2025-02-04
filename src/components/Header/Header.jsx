import React from "react";
import "./Header.css";

const Header = ({ isDarkMode, toggleTheme }) => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className={`header ${isDarkMode ? "dark" : ""}`}>
            <a href="#home" className="logo">
                My Portfoli
            </a>
            <nav>
                <ul className="nav-links">
                    <li>
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("about");
                            }}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("projects");
                            }}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("skills");
                            }}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("contact");
                            }}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <button className="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </header>
    );
};

export default Header;
