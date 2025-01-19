function SkillShowcase() {
    return (
      <section className="skills-section" id="skills">
        <div className="content-wrapper">
          <h2 className="mbr-section-title">
            <strong>Skills <span>Showcase</span></strong>
          </h2>
          
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="skill-name">Frontend Development</h3>
              <p className="skill-description">
                HTML5, CSS3, JavaScript, React.js, Bootstrap, Responsive Design
              </p>
              <div className="progress-container">
                <div className="progress">
                  <div className="progress-bar" style={{width: '90%'}}></div>
                </div>
                <div className="skill-level">Advanced</div>
              </div>
            </div>
  
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3 className="skill-name">Backend Development</h3>
              <p className="skill-description">
                Node.js, Express.js, RESTful APIs, Database Management
              </p>
              <div className="progress-container">
                <div className="progress">
                  <div className="progress-bar" style={{width: '85%'}}></div>
                </div>
                <div className="skill-level">Advanced</div>
              </div>
            </div>
  
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="skill-name">Tools & Technologies</h3>
              <p className="skill-description">
                Git, GitHub, VS Code, npm, Webpack, Command Line
              </p>
              <div className="progress-container">
                <div className="progress">
                  <div className="progress-bar" style={{width: '88%'}}></div>
                </div>
                <div className="skill-level">Advanced</div>
              </div>
            </div>
  
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-database"></i>
              </div>
              <h3 className="skill-name">Databases</h3>
              <p className="skill-description">
                MongoDB, PostgreSQL, MySQL, Redis
              </p>
              <div className="progress-container">
                <div className="progress">
                  <div className="progress-bar" style={{width: '82%'}}></div>
                </div>
                <div className="skill-level">Proficient</div>
              </div>
            </div>
  
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3 className="skill-name">Cloud & DevOps</h3>
              <p className="skill-description">
                AWS, Docker, CI/CD, Deployment
              </p>
              <div className="progress-container">
                <div className="progress">
                  <div className="progress-bar" style={{width: '75%'}}></div>
                </div>
                <div className="skill-level">Intermediate</div>
              </div>
            </div>
  
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="skill-name">Mobile Development</h3>
              <p className="skill-description">
                React Native, Progressive Web Apps
              </p>
              <div className="progress-container">
                <div className="progress">
                  <div className="progress-bar" style={{width: '80%'}}></div>
                </div>
                <div className="skill-level">Proficient</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default SkillShowcase;