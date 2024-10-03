import { Link } from 'react-router-dom';
import '../styles/Welcomepage.css';

function WelcomePage() {
  return (
    <>
      {/* <div className="welcome-container">
        <div className="welcome-text">
          <h1>Welcome to SHE-TECH-NET</h1>
          <p>
            Unlock your potential with SHE-TECH-NET, a thriving community
            dedicated to uplifting and empowering women in technology. Dive into expertly crafted courses, exclusive events, career opportunities, and personalized mentorship to support your journey in tech. Join us and start building your future today!
          </p>
          <div className="auth-buttons">
            <Link to="/signup" className="btn signup-btn">Sign Up</Link>
            <Link to="/signin" className="btn signin-btn">Sign In</Link>
          </div>
        </div> */}

        <div className="welcome-container">
        <div className="welcome-text">
          <h1>Welcome to SHE-TECH-NET</h1>
          <p>
            Unlock your potential with SHE-TECH-NET, a thriving community
            dedicated to uplifting and empowering women in technology. Dive into expertly crafted courses, exclusive events, career opportunities, and personalized mentorship to support your journey in tech. Join us and start building your future today!
          </p>
          <div className="auth-buttons">
            <Link to="/signup" className="btn signup-btn">Sign Up</Link>
            <Link to="/signin" className="btn signin-btn">Sign In</Link>
          </div>
        </div>
       

        <section className="features-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Expert-Led Courses</h3>
              <p>Learn from experienced professionals with hands-on tutorials and workshops to advance your tech skills.</p>
            </div>
            <div className="feature-card">
              <h3>Exclusive Events</h3>
              <p>Join webinars, meetups, and hackathons to network and grow alongside industry leaders.</p>
            </div>
            <div className="feature-card">
              <h3>Career Opportunities</h3>
              <p>Access job boards and internship opportunities to kickstart your career in tech.</p>
            </div>
            <div className="feature-card">
              <h3>Personalized Mentorship</h3>
              <p>Get matched with mentors who can guide you through your professional journey.</p>
            </div>
          </div>
        </section>


        <section className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="path-to-creator1.jpg" alt="Team Member 1" />
              <h3>Ashley Von</h3>
              <p>Lead Developer and Co-Founder</p>
              <a href="https://www.linkedin.com/in/member-one" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </div>
            <div className="team-member">
              <img src="path-to-creator2.jpg" alt="Team Member 2" />
              <h3>Aminata Sal</h3>
              <p>UI/UX Designer and Co-Founder</p>
              <a href="https://www.linkedin.com/in/member-two" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </div>
            <div className="team-member">
              <img src="path-to-creator3.jpg" alt="Team Member 3" />
              <h3>Meadin Menbere</h3>
              <p>Project Manager and Co-Founder</p>
              <a href="https://www.linkedin.com/in/member-three" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default WelcomePage;
