import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4 text-center">
                        <div className="image-wrapper">
                            <img src="/assets/images/profile.jpg" alt="Profile" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <h1 className="mbr-section-title">
                            Hi, I'm <span>Leivi Dominguez</span>
                        </h1>
                        <p className="mbr-text">
                            A passionate Full Stack Developer with expertise in building modern web applications.
                            I love creating intuitive user interfaces and robust backend solutions.
                        </p>
                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-primary me-3">View My Work</a>
                            <a href="#contact" className="btn btn-outline-light">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 