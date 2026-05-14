import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineBadgeCheck } from "react-icons/hi";
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Cloud from './Cloud';
import Reveal from "../common/Reveal";

const tabs = [
    { id: 1, label: 'Frontend', Component: Frontend },
    { id: 2, label: 'Backend', Component: Backend },
    { id: 3, label: 'Cloud & DevOps', Component: Cloud },
];

const Skills = () => {
    const [active, setActive] = useState(1);
    const ActiveComponent = tabs.find((t) => t.id === active).Component;

    return (
        <section className="skills section" id="skills">
            <Reveal>
                <div className="skills__head container">
                    <span className="skills__kicker">
                        <HiOutlineBadgeCheck /> Skills
                    </span>
                    <h2 className="skills__title">The stack I work with daily</h2>
                    <p className="skills__lede">
                        A pragmatic mix of frontend frameworks, backend runtimes, and cloud
                        tooling — what I reach for when something needs to ship.
                    </p>
                </div>
            </Reveal>

            <Reveal delay={0.1}>
                <div className="skills__tabs container">
                    {tabs.map((t) => (
                        <button
                            key={t.id}
                            type="button"
                            className={t.id === active ? "skills__tab is-active" : "skills__tab"}
                            onClick={() => setActive(t.id)}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                <div className="skills__container container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                        >
                            <ActiveComponent />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </Reveal>
        </section>
    );
};

export default Skills;
