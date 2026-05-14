import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Monogram from "./Monogram";

const Data = () => (
    <div className="home__data">
        <Monogram />

        <div className="home__intro">
            <div className="home__eyebrow">
                <span className="home__eyebrow-dot" aria-hidden="true" />
                Available for new collaborations
            </div>

            <h1 className="home__title">
                Mayank Sharma
            </h1>

            <p className="home__subtitle">
                Software Developer building <em>web apps</em> &amp; <em>AI agents</em>.
                Currently shipping at <strong>Tata Consultancy Services</strong> —
                previously SDE at <strong>NYX</strong>.
            </p>

            <div className="home__cta">
                <a href="#contact" className="button button--flex">
                    Get in touch
                    <HiOutlineArrowSmRight className="button__icon" />
                </a>
                <a href="#featured" className="home__link">
                    See featured work →
                </a>
            </div>
        </div>
    </div>
);

export default Data;
