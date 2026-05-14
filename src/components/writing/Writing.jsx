import React from "react";
import "./writing.css";
import { HiOutlinePencilAlt, HiOutlineArrowSmRight } from "react-icons/hi";
import Reveal from "../common/Reveal";

const entries = [
    {
        date: "Coming soon",
        title: "Designing an LLM agent that actually filters noise",
        excerpt: "Notes on prompt structure, evaluation, and why most market-signal agents end up just summarising the news.",
        tag: "AI",
    },
    {
        date: "Coming soon",
        title: "From Express to NestJS: what I'd actually do differently",
        excerpt: "A pragmatic take after a year of writing both — when the structure earns its weight and when it gets in the way.",
        tag: "Backend",
    },
    {
        date: "Coming soon",
        title: "Background jobs without a queue",
        excerpt: "Sometimes a cron and a small Telegram bot is genuinely all you need. A defence of small infra.",
        tag: "Notes",
    },
];

const Writing = () => (
    <section className="writing section" id="writing">
        <Reveal>
            <div className="writing__head container">
                <span className="writing__kicker"><HiOutlinePencilAlt /> Writing</span>
                <h2 className="writing__title">Notes &amp; essays</h2>
                <p className="writing__lede">
                    A small space for technical writing — what I've learned, what I'm
                    still figuring out. Posts arrive when they're ready.
                </p>
            </div>
        </Reveal>

        <Reveal delay={0.1}>
            <ul className="writing__list container">
                {entries.map((e, i) => (
                    <li className="writing__item" key={i}>
                        <article className="writing__article">
                            <div className="writing__meta">
                                <span className="writing__date">{e.date}</span>
                                <span className="writing__tag">{e.tag}</span>
                            </div>
                            <h3 className="writing__article-title">{e.title}</h3>
                            <p className="writing__excerpt">{e.excerpt}</p>
                            <span className="writing__read">
                                Notify me when live <HiOutlineArrowSmRight />
                            </span>
                        </article>
                    </li>
                ))}
            </ul>
        </Reveal>
    </section>
);

export default Writing;
