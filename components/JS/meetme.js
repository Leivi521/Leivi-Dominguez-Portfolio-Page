function MeetMe() {
  return (
    <section id="meetme" className="meet-me-section">
      <div className="content-wrapper">
        <h2 className="mbr-section-title">
          <strong>About <span>Me</span></strong>
        </h2>

        <div className="text-wrapper">
          <p className="mbr-text">
            I am a Full Stack Developer with a passion for creating beautiful and functional web applications. 
            With a strong foundation in both frontend and backend technologies, I specialize in building 
            scalable solutions that solve real-world problems. My journey in tech began with a fascination 
            for how things work, which evolved into a career crafting digital experiences.
          </p>
        </div>

        <div className="items-wrap">
          <div className="card">
            <h3 className="card-title">
              <i className="fas fa-code"></i> Development
            </h3>
            <p className="card-text">
              Proficient in modern web technologies including React, Node.js, and cloud services. 
              I focus on writing clean, maintainable code that follows best practices and industry standards.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title">
              <i className="fas fa-lightbulb"></i> Problem Solving
            </h3>
            <p className="card-text">
              Strong analytical skills with a knack for breaking down complex problems into manageable solutions. 
              I enjoy tackling challenging projects that push my technical boundaries.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title">
              <i className="fas fa-users"></i> Collaboration
            </h3>
            <p className="card-text">
              Experienced in working with cross-functional teams, I value clear communication and believe in 
              the power of collective knowledge to drive project success.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title">
              <i className="fas fa-rocket"></i> Innovation
            </h3>
            <p className="card-text">
              Always staying current with the latest tech trends and best practices. I'm passionate about 
              implementing innovative solutions that enhance user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}