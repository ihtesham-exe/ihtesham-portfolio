import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>SystemBlink</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built 6+ complete applications using React.js and Next.js. Created
              responsive UI/UX and designed wireframes using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Egineer (MERN)</h4>
                <h5>Ashtra Ai</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed a modern leads generation platform which help business
              to get the desired leads. Developed multiple modules using
              React.js & migrated critical functionalities to Node.js
              microservices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
