import React from 'react';
import Projects from './Projects';
import Reveal from '../common/Reveal';
import "./projects.css";

const Portfolio = () => (
    <section className="portfolio section" id="portfolio">
        <Reveal>
            <div className="portfolio__head container">
                <span className="portfolio__kicker">Other projects</span>
                <h2 className="portfolio__title">More things I've built</h2>
                <p className="portfolio__lede">
                    A mix of full-stack apps and front-end experiments. Most live as
                    open-source repos — click through for the code.
                </p>
            </div>
        </Reveal>

        <Projects />
    </section>
);

export default Portfolio;
