import { useEffect, useState } from 'react';
import { useTheme } from '../../utils/themeUtils';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            // Navbar scroll effect
            setIsScrolled(window.scrollY > 50);

            // Active nav link on scroll
            const sections = document.querySelectorAll('section');
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(`#${targetId}`);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a className="navbar-brand" href="#home">Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a 
                                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                                href="#home"
                                onClick={(e) => handleNavClick(e, 'home')}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                                href="#about"
                                onClick={(e) => handleNavClick(e, 'about')}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                                href="#projects"
                                onClick={(e) => handleNavClick(e, 'projects')}
                            >
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                                href="#contact"
                                onClick={(e) => handleNavClick(e, 'contact')}
                            >
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <button 
                                className="theme-toggle"
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                            >
                                <i className={`fas fa-${theme === 'light' ? 'moon' : 'sun'}`}></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 