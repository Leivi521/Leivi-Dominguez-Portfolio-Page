import React from 'react';
import './Projects.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
                <div className="project-links">
                    {project.demoUrl && (
                        <a href={project.demoUrl} className="btn-project" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                    )}
                    {project.githubUrl && (
                        <a href={project.githubUrl} className="btn-project" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard; 