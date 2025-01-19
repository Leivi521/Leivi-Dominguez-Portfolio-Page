// Navbar Component
const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Leivi521</a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  
  // Home Component
  const Home = () => (
    <section className="hero-section" id="home">
      <div className="content-wrapper">
        <div className="image-wrapper">
          <img 
            src="assets/images/profile.jpg" 
            alt="Leivi Dominguez - Full Stack Developer" 
          />
        </div>
        <div className="text-content">
          <h1>Leivi Dominguez</h1>
          <h2>Full Stack Developer</h2>
          <p>Transforming ideas into elegant, functional web solutions</p>
        </div>
      </div>
    </section>
  );
  
  // MeetMe Component
  const MeetMe = () => (
    <section id="meetme" className="meet-me-section">
      <div className="content-wrapper">
        <h2 className="mbr-section-title">
          <strong>About <span>Me</span></strong>
        </h2>
        <div className="text-content">
          <p>
            I am a passionate Full Stack Developer with expertise in modern web technologies.
            My journey in web development has equipped me with a strong foundation in both
            front-end and back-end development.
          </p>
        </div>
      </div>
    </section>
  );
  
  // SkillShowcase Component
  const SkillShowcase = () => (
    <section id="skills" className="skills-section">
      <div className="content-wrapper">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <i className="fab fa-react"></i>
            <h3>React</h3>
          </div>
          <div className="skill-item">
            <i className="fab fa-node-js"></i>
            <h3>Node.js</h3>
          </div>
          <div className="skill-item">
            <i className="fab fa-js"></i>
            <h3>JavaScript</h3>
          </div>
        </div>
      </div>
    </section>
  );
  
  // MyProjects Component
  const MyProjects = () => (
    <section id="projects" className="projects-section">
      <div className="content-wrapper">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {/* Add your project items here */}
        </div>
      </div>
    </section>
  );
  
  // WhyChooseMe Component
  const WhyChooseMe = () => (
    <section id="why-choose-me" className="why-choose-section">
      <div className="content-wrapper">
        <h2>Why Choose Me</h2>
        <div className="reasons-grid">
          <div className="reason-item">
            <h3>Dedicated Problem Solver</h3>
            <p>I approach each project with determination and creativity.</p>
          </div>
        </div>
      </div>
    </section>
  );
  
  // LetsConnect Component
  const LetsConnect = () => (
    <section id="contact" className="contact-section">
      <div className="content-wrapper">
        <h2>Let's Connect</h2>
        <div className="contact-info">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
  
  // Main App Component
  const App = () => (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Home />
        <MeetMe />
        <SkillShowcase />
        <MyProjects />
        <WhyChooseMe />
        <LetsConnect />
      </main>
    </div>
  );
  