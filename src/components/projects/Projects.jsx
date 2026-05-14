import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from "./Data";
import ProjectItems from "./ProjectItems";

const gridVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const Projects = () => (
    <motion.div
        className="project__container container grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
    >
        {projectsData.map((item) => (
            <ProjectItems item={item} key={item.id} />
        ))}
    </motion.div>
);

export default Projects;
