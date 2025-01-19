function Home() {
    return (
      <section className="hero-section" id="home">
        <div className="content-wrapper">
          <div className="image-wrapper">
            <img 
              src="assets/images/profile.jpg" 
              alt="Leivi Dominguez - Full Stack Developer" 
            />
          </div>
          
          <h1 className="mbr-section-title">
            Hi, I'm <span>Leivi Dominguez</span>
          </h1>
          
          <div className="text-wrapper">
            <p className="mbr-text">
              Full Stack Developer specializing in modern web technologies.
              Creating elegant solutions to complex problems through clean,
              efficient code and intuitive design.
            </p>
          </div>
          
          <div className="mbr-section-btn">
            <a 
              href="#projects" 
              className="btn btn-primary"
            >
              View My Work <i className="fas fa-arrow-right"></i>
            </a>
            <a 
              href="#contact" 
              className="btn btn-primary"
              style={{
                marginLeft: '1rem',
                backgroundColor: 'transparent',
                border: '2px solid #fe1e52'
              }}
            >
              Contact Me <i className="fas fa-envelope"></i>
            </a>
          </div>
  
          <div className="social-links" style={{
            marginTop: '2rem',
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center'
          }}>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                transition: 'color 0.3s ease'
              }}
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                transition: 'color 0.3s ease'
              }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="social-link"
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                transition: 'color 0.3s ease'
              }}
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Home;