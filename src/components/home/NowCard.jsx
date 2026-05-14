import React from "react";
import { HiOutlineBriefcase, HiOutlineLightningBolt, HiOutlineAcademicCap, HiOutlineLocationMarker } from "react-icons/hi";

const items = [
    {
        Icon: HiOutlineBriefcase,
        label: "Currently",
        value: "Software Developer at Tata Consultancy Services",
    },
    {
        Icon: HiOutlineLightningBolt,
        label: "Building",
        value: "An AI agent for Indian stock market insights",
    },
    {
        Icon: HiOutlineAcademicCap,
        label: "Learning",
        value: "NestJS · Microsoft Azure",
    },
    {
        Icon: HiOutlineLocationMarker,
        label: "Based in",
        value: "India · Open to remote",
    },
];

const NowCard = () => (
    <aside className="now-card" aria-label="What I'm doing right now">
        <header className="now-card__head">
            <span className="now-card__title">At a glance</span>
            <span className="now-card__status">
                <span className="now-card__pulse" aria-hidden="true" />
                Active
            </span>
        </header>

        <ul className="now-card__list">
            {items.map(({ Icon, label, value }) => (
                <li className="now-card__item" key={label}>
                    <span className="now-card__icon"><Icon /></span>
                    <div className="now-card__text">
                        <span className="now-card__label">{label}</span>
                        <span className="now-card__value">{value}</span>
                    </div>
                </li>
            ))}
        </ul>
    </aside>
);

export default NowCard;
