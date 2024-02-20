import React, { useEffect, useState } from 'react';
import { projectsData } from "./Data";
import { projectsNav } from './Data';
import ProjectItems from "./ProjectItems";

const Projects = () => {
    const [item, setItem] =  useState({ name: "Full-Stack" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
         if(item.name === "Full-Stack") {
            setProjects(projectsData);
         }
         else{
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
         }
    },[item]);
    
    const handleClick  = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    };

    return (
        
            <div className="project__container container grid">
                {projects.map((item) => {
                    return <ProjectItems item={item} key={item.id} />
                })}
            </div>
        
    );
}

export default Projects;