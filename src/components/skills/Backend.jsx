import React from "react";
import { SiNodedotjs, SiNestjs, SiExpress, SiPostgresql, SiMongodb, SiMysql } from "react-icons/si";

const items = [
    { name: "Node.js", level: "Intermediate", Icon: SiNodedotjs },
    { name: "NestJS", level: "Intermediate", Icon: SiNestjs },
    { name: "Express.js", level: "Intermediate", Icon: SiExpress },
    { name: "PostgreSQL", level: "Intermediate", Icon: SiPostgresql },
    { name: "MongoDB", level: "Intermediate", Icon: SiMongodb },
    { name: "MySQL", level: "Intermediate", Icon: SiMysql },
];

const Backend = () => (
    <div className="skills__content">
        <div className="skills__grid">
            {items.map(({ name, level, Icon }) => (
                <div className="skill" key={name}>
                    <span className="skill__icon"><Icon /></span>
                    <div className="skill__text">
                        <span className="skill__name">{name}</span>
                        <span className="skill__level">{level}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Backend;
