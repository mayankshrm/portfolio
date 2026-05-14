import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineCodeBracket } from "react-icons/hi2";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const ProjectItems = ({ item }) => {
    const hasGithub = Boolean(item.link);
    const hasDemo = Boolean(item.demo);
    const isBackground = item.category === "AI/Automation";

    return (
        <motion.div
            className="project__card"
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.012 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        >
            <div className="project__media">
                <img className="project__img" src={item.image} alt={item.title} />
                {isBackground && (
                    <span className="project__badge project__badge--no-demo">Background service</span>
                )}
            </div>

            <h3 className="project__title">{item.title}</h3>
            {item.description && <p className="project__desc">{item.description}</p>}

            {item.tags?.length > 0 && (
                <ul className="project__tags">
                    {item.tags.map((t) => (
                        <li key={t} className="project__tag">{t}</li>
                    ))}
                </ul>
            )}

            <div className="project__links">
                {hasGithub && (
                    <a
                        href={item.link}
                        className="project__button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <HiOutlineCodeBracket /> GitHub
                        <HiOutlineArrowSmRight className="project__button-icon" />
                    </a>
                )}
                {hasDemo && (
                    <a
                        href={item.demo}
                        className="project__button project__button--primary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo <HiOutlineArrowSmRight className="project__button-icon" />
                    </a>
                )}
                {!hasGithub && !hasDemo && (
                    <span className="project__button project__button--disabled">Coming soon</span>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectItems;
