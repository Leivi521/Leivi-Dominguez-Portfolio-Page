import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "HTML5", icon: "fab fa-html5" },
                { name: "CSS3", icon: "fab fa-css3-alt" },
                { name: "JavaScript", icon: "fab fa-js" },
                { name: "React", icon: "fab fa-react" },
                { name: "Bootstrap", icon: "fab fa-bootstrap" }
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", icon: "fab fa-node-js" },
                { name: "Python", icon: "fab fa-python" },
                { name: "Express", icon: "fas fa-server" },
                { name: "MongoDB", icon: "fas fa-database" },
                { name: "SQL", icon: "fas fa-database" }
            ]
        },
        {
            title: "Tools & Others",
            skills: [
                { name: "Git", icon: "fab fa-git-alt" },
                { name: "Docker", icon: "fab fa-docker" },
                { name: "AWS", icon: "fab fa-aws" },
                { name: "VS Code", icon: "fas fa-code" },
                { name: "Figma", icon: "fab fa-figma" }
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="mbr-section-title">My <span>Skills</span></h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card">
                            <h3>{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <i className={skill.icon}></i>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 