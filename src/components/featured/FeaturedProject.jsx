import React from "react";
import "./featured.css";
import { HiOutlineLightningBolt, HiOutlineArrowSmRight } from "react-icons/hi";
import { SiPython, SiTelegram, SiOpenai } from "react-icons/si";
import Reveal from "../common/Reveal";

const FeaturedProject = () => (
    <section className="featured section" id="featured">
        <Reveal>
            <div className="featured__head container">
                <span className="featured__kicker">
                    <HiOutlineLightningBolt /> Featured work
                </span>
                <h2 className="featured__title">
                    An AI agent that watches the Indian stock market
                </h2>
                <p className="featured__lede">
                    A headless background service that ingests NSE/BSE market data,
                    runs analyses with an LLM, and pushes actionable insights to a
                    private Telegram channel — so I don't have to stare at charts.
                </p>
            </div>
        </Reveal>

        <Reveal delay={0.1}>
            <div className="featured__grid container">
                <article className="featured__story">
                    <div className="featured__block">
                        <span className="featured__label">Problem</span>
                        <p>
                            Indian market data is noisy. Every minute spent eyeballing
                            charts is time not spent shipping. I needed signal, not
                            scrolling.
                        </p>
                    </div>

                    <div className="featured__block">
                        <span className="featured__label">Approach</span>
                        <ol className="featured__steps">
                            <li>
                                <span className="featured__step-num">01</span>
                                <div>
                                    <strong>Ingest</strong> — cron-driven pulls of
                                    price &amp; volume data from public market feeds.
                                </div>
                            </li>
                            <li>
                                <span className="featured__step-num">02</span>
                                <div>
                                    <strong>Analyse</strong> — an LLM agent reasons
                                    over the snapshot, looking for breakouts,
                                    sentiment shifts, and unusual volume.
                                </div>
                            </li>
                            <li>
                                <span className="featured__step-num">03</span>
                                <div>
                                    <strong>Notify</strong> — only meaningful events
                                    get pushed to Telegram, formatted for a glance.
                                </div>
                            </li>
                        </ol>
                    </div>

                    <div className="featured__block">
                        <span className="featured__label">Outcome</span>
                        <p>
                            Daily attention dropped from hours of dashboard time to a
                            handful of focused alerts. Currently iterating on
                            signal-to-noise tuning.
                        </p>
                    </div>
                </article>

                <aside className="featured__side">
                    <div className="featured__panel">
                        <header className="featured__panel-head">
                            <span className="featured__panel-title">stack</span>
                            <span className="featured__panel-dot" aria-hidden="true" />
                        </header>
                        <ul className="featured__stack">
                            <li><SiPython /> Python · scheduling &amp; data layer</li>
                            <li><SiOpenai /> LLM-based reasoning agent</li>
                            <li><SiTelegram /> Telegram bot for alerts</li>
                        </ul>
                    </div>

                    <div className="featured__panel">
                        <header className="featured__panel-head">
                            <span className="featured__panel-title">status</span>
                        </header>
                        <dl className="featured__status">
                            <div><dt>Phase</dt><dd>Active development</dd></div>
                            <div><dt>Code</dt><dd>Private · WIP</dd></div>
                            <div><dt>Type</dt><dd>Background service</dd></div>
                        </dl>
                    </div>

                    <a href="#contact" className="featured__cta">
                        Want to chat about it? <HiOutlineArrowSmRight />
                    </a>
                </aside>
            </div>
        </Reveal>
    </section>
);

export default FeaturedProject;
