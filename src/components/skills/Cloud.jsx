import React from "react";
import { SiMicrosoftazure, SiGit, SiGithub } from "react-icons/si";

const items = [
    { name: "Microsoft Azure", level: "Intermediate", Icon: SiMicrosoftazure },
    { name: "Git", level: "Intermediate", Icon: SiGit },
    { name: "GitHub", level: "Intermediate", Icon: SiGithub },
];

const Cloud = () => (
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

export default Cloud;
