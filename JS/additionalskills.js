function AdditionalSkills() {
    return (
      <section className="additional-skills" id="additional-skills">
        <div className="content-wrapper">
          <h2 className="section-title">
            <strong>Additional <span>Skills</span></strong>
          </h2>
  
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-language"></i>
              </div>
              <h3>Languages</h3>
              <ul>
                <li>English (Fluent)</li>
                <li>Spanish (Native)</li>
              </ul>
            </div>
  
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3>Project Management</h3>
              <ul>
                <li>Agile/Scrum</li>
                <li>JIRA</li>
                <li>Trello</li>
              </ul>
            </div>
  
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-pencil-ruler"></i>
              </div>
              <h3>Design</h3>
              <ul>
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>UI/UX Principles</li>
              </ul>
            </div>
  
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-tasks"></i>
              </div>
              <h3>Soft Skills</h3>
              <ul>
                <li>Problem Solving</li>
                <li>Team Leadership</li>
                <li>Communication</li>
              </ul>
            </div>
  
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Development Tools</h3>
              <ul>
                <li>Git/GitHub</li>
                <li>Docker</li>
                <li>Jenkins</li>
              </ul>
            </div>
  
            <div className="skill-card">
              <div className="skill-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Cloud Services</h3>
              <ul>
                <li>AWS</li>
                <li>Google Cloud</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
  
          <div className="certifications">
            <h3 className="cert-title">Certifications</h3>
            <div className="cert-grid">
              <div className="cert-card">
                <i className="fas fa-certificate"></i>
                <span>AWS Certified Developer Associate</span>
              </div>
              <div className="cert-card">
                <i className="fas fa-certificate"></i>
                <span>React Developer Certification</span>
              </div>
              <div className="cert-card">
                <i className="fas fa-certificate"></i>
                <span>Scrum Master Certification</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default AdditionalSkills;