import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import NowCard from "./NowCard";
import Reveal from "../common/Reveal";

const Home = () => (
    <section className="home section" id="home">
        <div className="home__ambient" aria-hidden="true">
            <div className="home__ambient-blob home__ambient-blob--a" />
            <div className="home__ambient-blob home__ambient-blob--b" />
            <div className="home__ambient-grid" />
        </div>

        <div className="home__container container">
            <Reveal>
                <div className="home__content">
                    <div className="home__main">
                        <Social />
                        <Data />
                    </div>
                    <NowCard />
                </div>
            </Reveal>
        </div>
    </section>
);

export default Home;
