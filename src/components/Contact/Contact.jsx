import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";  // Import DOMPurify for sanitization
import "./Contact.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = ({ isDarkMode }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Sanitize inputs to prevent XSS
    const sanitizeInput = (input) => {
        return DOMPurify.sanitize(input);
    };

    const handleChange = (e) => {
        const sanitizedValue = sanitizeInput(e.target.value);
        setFormData({ ...formData, [e.target.name]: sanitizedValue });
    };

    const validateForm = () => {
        let formErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) formErrors.name = "Name is required.";
        if (!formData.email || !emailRegex.test(formData.email)) 
            formErrors.email = "Valid email is required.";
        if (!formData.message.trim()) 
            formErrors.message = "Message cannot be empty.";
        if (formData.message.length > 500)
            formErrors.message = "Message should not exceed 500 characters.";

        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        const apiKey = import.meta.env.VITE_API_KEY;
        const apiKey1 = import.meta.env.VITE_API_KEY1;
        const apiKey2 = import.meta.env.VITE_API_KEY2;

        setIsLoading(true);
        emailjs
            .sendForm(apiKey1, apiKey2, e.target, apiKey)
            .then(() => {
                setIsSubmitted(true);
                setIsLoading(false);
                alert("Message Sent Successfully!");
            })
            .catch(() => {
                setIsLoading(false);
                alert("Failed to send message. Please try again later.");
            });
    };

    return (
        <section id="contact" className={`contact ${isDarkMode ? "dark" : ""}`}>
            <h1>Contact Me</h1>
            <p>I'd love to hear from you! Drop me a message, and I'll get back to you as soon as I can.</p>

            {isSubmitted && <div className="success-message">Your message has been sent!</div>}
            {errors.submit && <div className="error-message">{errors.submit}</div>}

            <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={errors.name ? "error" : ""}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={errors.email ? "error" : ""}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    maxLength="500"
                    className={errors.message ? "error" : ""}
                />
                {errors.message && <p className="error-message">{errors.message}</p>}

                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                </button>
            </form>

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
        </section>
    );
};

export default Contact;
