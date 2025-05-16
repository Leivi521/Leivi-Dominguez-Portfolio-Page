import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="mbr-section-title">About <span>Me</span></h2>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="text-wrapper">
                            <p className="mbr-text">
                                I am a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
                                My journey in web development started with a curiosity for creating interactive and user-friendly applications.
                            </p>
                            <p className="mbr-text">
                                With expertise in modern JavaScript frameworks and a keen eye for design, I strive to build applications 
                                that are not only functional but also provide an exceptional user experience.
                            </p>
                        </div>
                        
                        <div className="skills-tags">
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Node.js</span>
                            <span>Python</span>
                            <span>SQL</span>
                            <span>MongoDB</span>
                            <span>Git</span>
                            <span>Docker</span>
                        </div>

                        <div className="languages-section">
                            <h3>Languages</h3>
                            <div className="language-tags">
                                <span>English (Fluent)</span>
                                <span>Spanish (Native)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 