function MyProjects() {
    return (
      <section className="features04 tradem5" id="projects">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mbr-section-title mbr-fonts-style align-center">
                <strong>Featured Projects</strong>
              </h2>
            </div>
            
            <div className="col-12 col-lg-4">
              <div className="card">
                <div className="card-wrapper">
                  <h4 className="card-title mbr-fonts-style">
                    <strong>CareConnect</strong>
                  </h4>
                  <ul className="list mbr-fonts-style">
                    <li>Built a full-stack healthcare platform using React, Node.js, and MongoDB</li>
                    <li>Implemented secure authentication with JWT and bcrypt</li>
                    <li>Reduced appointment scheduling time by 40% through automated system</li>
                    <li>Integrated real-time notifications using Socket.IO</li>
                  </ul>
                  <div className="mbr-section-btn">
                    <a className="btn btn-primary" href="https://github.com/yourusername/careconnect" target="_blank">
                      View Project <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-12 col-lg-4">
              <div className="card">
                <div className="card-wrapper">
                  <h4 className="card-title mbr-fonts-style">
                    <strong>Gamepedia</strong>
                  </h4>
                  <ul className="list mbr-fonts-style">
                    <li>Developed a gaming database platform using React and Redux</li>
                    <li>Integrated RAWG API for real-time game data and statistics</li>
                    <li>Implemented responsive design with Material-UI components</li>
                    <li>Built custom caching system reducing API calls by 60%</li>
                  </ul>
                  <div className="mbr-section-btn">
                    <a className="btn btn-primary" href="https://github.com/yourusername/gamepedia" target="_blank">
                      View Project <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-12 col-lg-4">
              <div className="card">
                <div className="card-wrapper">
                  <h4 className="card-title mbr-fonts-style">
                    <strong>StarWars Blog API</strong>
                  </h4>
                  <ul className="list mbr-fonts-style">
                    <li>Created RESTful API using Express.js and PostgreSQL</li>
                    <li>Implemented JWT authentication and role-based access</li>
                    <li>Achieved 95% test coverage using Jest and Supertest</li>
                    <li>Deployed on AWS using Docker containers</li>
                  </ul>
                  <div className="mbr-section-btn">
                    <a className="btn btn-primary" href="https://github.com/yourusername/starwars-blog" target="_blank">
                      View Project <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default MyProjects;