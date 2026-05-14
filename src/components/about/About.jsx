import React from 'react';
import "./about.css";
import AboutImg from "../../assets/aboutBW.jpg";
import CV from "../../assets/CV.pdf";
import Info from "./Info";
import Reveal from "../common/Reveal";
import { HiOutlineDownload } from "react-icons/hi";

const About = () => (
    <section className="about section" id="about">
        <Reveal>
            <div className="about__head container">
                <span className="about__kicker">About</span>
                <h2 className="about__title">A short introduction</h2>
            </div>
        </Reveal>

        <Reveal delay={0.1}>
            <div className="about__container container">
                <div className="about__media">
                    <img src={AboutImg} alt="Mayank Sharma" className="about__img" />
                </div>

                <div className="about__data">
                    <p className="about__lede">
                        I'm a software developer focused on building reliable, performant
                        web applications and small pieces of automation.
                    </p>
                    <p className="about__description">
                        I currently ship at <strong>Tata Consultancy Services</strong>,
                        after a year as an SDE at <strong>NYX</strong> where I worked
                        across the stack. On the side I'm building an AI agent that watches
                        the Indian stock market and pings me on Telegram — it's where I
                        learn most of the new things I work with.
                    </p>
                    <p className="about__description">
                        Comfortable with <strong>Node.js</strong>, <strong>NestJS</strong>,
                        <strong> React</strong>, <strong>Next.js</strong>, <strong>PostgreSQL</strong>,
                        and a growing amount of <strong>Azure</strong>.
                    </p>

                    <Info />

                    <a download="resume-mayank-sharma.pdf" href={CV} className="button button--flex">
                        Download Resume
                        <HiOutlineDownload className="button__icon" />
                    </a>
                </div>
            </div>
        </Reveal>
    </section>
);

export default About;
