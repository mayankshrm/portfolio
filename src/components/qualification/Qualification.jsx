import React from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";
import Reveal from "../common/Reveal";

const experience = [
    {
        title: "Software Developer",
        org: "Tata Consultancy Services",
        date: "2025 — Present",
        note: "Shipping internal tooling and platform work.",
    },
    {
        title: "SDE",
        org: "NYX",
        date: "2024 — 2025",
        note: "Worked across the stack on customer-facing product surfaces.",
    },
];

const education = [
    {
        title: "B.Tech, Electronics & Communication",
        org: "GGSIPU",
        date: "2020 — 2024",
        note: "Engineering foundation · self-taught the rest.",
    },
    {
        title: "Senior Secondary",
        org: "Laxmi Public School",
        date: "2018 — 2020",
    },
    {
        title: "Secondary",
        org: "Laxmi Public School",
        date: "2017 — 2018",
    },
];

const TimelineColumn = ({ icon: Icon, label, items }) => (
    <div className="ql-col">
        <header className="ql-col__head">
            <span className="ql-col__icon"><Icon /></span>
            <h3 className="ql-col__label">{label}</h3>
        </header>

        <ol className="ql-col__list">
            {items.map((item, i) => (
                <li className="ql-entry" key={`${item.org}-${i}`}>
                    <span className="ql-entry__rail" aria-hidden="true">
                        <span className="ql-entry__dot" />
                        {i < items.length - 1 && <span className="ql-entry__line" />}
                    </span>

                    <div className="ql-entry__body">
                        <div className="ql-entry__date">
                            <HiOutlineCalendar /> {item.date}
                        </div>
                        <h4 className="ql-entry__title">{item.title}</h4>
                        <p className="ql-entry__org">{item.org}</p>
                        {item.note && <p className="ql-entry__note">{item.note}</p>}
                    </div>
                </li>
            ))}
        </ol>
    </div>
);

const Qualification = () => (
    <section className="qualification section" id="qualification">
        <Reveal>
            <div className="qualification__head container">
                <span className="qualification__kicker">
                    <HiOutlineBriefcase /> Journey
                </span>
                <h2 className="qualification__title">Where I've been</h2>
                <p className="qualification__lede">
                    Work and study, side by side. Reverse-chronological so the most
                    recent thing is at the top.
                </p>
            </div>
        </Reveal>

        <Reveal delay={0.1}>
            <div className="qualification__grid container">
                <TimelineColumn icon={HiOutlineBriefcase} label="Experience" items={experience} />
                <TimelineColumn icon={HiOutlineAcademicCap} label="Education" items={education} />
            </div>
        </Reveal>
    </section>
);

export default Qualification;
