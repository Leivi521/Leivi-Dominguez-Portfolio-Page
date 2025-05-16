import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
import './styles/global.css';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </div>
    );
};

export default App; 