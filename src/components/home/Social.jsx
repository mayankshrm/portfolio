import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Social = () => (
    <div className="home__social">
        <a href="https://www.github.com/mayankshrm" className="home__social-icon" target="_blank" rel="noreferrer">
            <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/mayank-sharma-6b41a2199/" className="home__social-icon" target="_blank" rel="noreferrer">
            <FiLinkedin />
        </a>
    </div>
);

export default Social;
