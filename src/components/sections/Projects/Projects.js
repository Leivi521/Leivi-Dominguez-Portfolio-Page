import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "Project 1",
            description: "Description of project 1",
            image: "/assets/images/project1.jpg",
            technologies: ["React", "Node.js", "MongoDB"],
            demoUrl: "https://demo1.com",
            githubUrl: "https://github.com/project1",
            category: "web"
        },
        // Add more projects here
    ]);

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'web', label: 'Web Development' },
        { id: 'mobile', label: 'Mobile Apps' },
        { id: 'other', label: 'Other' }
    ];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="mbr-section-title">My <span>Projects</span></h2>
                
                <div className="project-filters">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 