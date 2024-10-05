import { Link } from 'react-router-dom';
import '../styles/Welcomepage.css';
import aminata from "../assets/Aminata.png"
import ashley from "../assets/Ashley.png"
import myphoto from "../assets/myphoto.jpeg"

function WelcomePage() {
  return (


    <div className="welcome-container">
      <div className="welcome-text">
        <h1>Welcome to SHE-TECH-NET</h1>
        <p>
          Unlock your full potential with SHE-TECH-NET, a vibrant and supportive community that’s passionately dedicated to uplifting and empowering women in technology. Here, you will find a welcoming environment designed to help you thrive in the tech industry, whether you're just starting out or looking to advance your career.

          Immerse yourself in expertly crafted courses tailored to expand your skills, gain exclusive access to inspiring events, and explore diverse career opportunities designed to help you reach new heights. Our personalized mentorship programs are here to guide you at every step, offering valuable advice and encouragement from experienced women who have walked the same path.

          Together, we celebrate your achievements, support your ambitions, and help you break down barriers in the tech world. 
          <br />
          Join us at SHE-TECH-NET and start building a future where your dreams in technology become reality. The journey to your best self in tech begins here—let’s rise and shine together!
        

        </p>
        <div className="auth-buttons">
          <Link to="/signup" className="btn signup-btn">Sign Up</Link>
          <Link to="/signin" className="btn signin-btn">Sign In</Link>
        </div>
      </div>


      <section className="features-section">
      
        <h2>WHAT WE OFFER</h2>
        
        <div className="features-grid">
          <div className="feature-card">
          <hr />
            <h3>Expert-Led Courses</h3>
            <p>Learn from professionals with hands-on tutorials and workshops to advance your tech skills.</p>
          </div>
          <div className="feature-card">
          <hr />
            <h3>Exclusive Events</h3>
            <p>Join webinars, meetups, and hackathons to network and grow alongside industry leaders.</p>
          </div>
          <div className="feature-card">
          <hr />
            <h3>Career Opportunities</h3>
            <p>Access job boards and internship opportunities to kickstart your career in tech.</p>
          </div>
          <div className="feature-card">
            <hr />
            <h3>Personalized Mentorship</h3>
            <p>Get matched with mentors who can guide you through your professional journey.</p>
          </div>
        </div>
      </section>


      <section className="team-section">
        <h2>MEET THE FOUNDERS</h2>
        <div className="team-grid">
          <div className="team-member">
          <img src= {ashley}  alt="Ashley's Picture" className="profilepicture" width = '50px' height='50px'/> 
            <h3>Ashley Von</h3>
           <p>Full Stack Developer</p>
            <a href="https://www.linkedin.com/in/ashley-von-0600a9239/" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </div>
          <div className="team-member">
          <img src= {aminata}  alt="Aminata's picture" className="profilepicture" width = '50px' height='50px'/> 
            <h3>Aminata Sal</h3>
            <p>Full Stack Developer</p>
            <a href="https://www.linkedin.com/in/aminata-mameami-sall/" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </div>
          <div className="team-member">
          <img src= {myphoto}  alt="Meadin's picture" className="profilepicture" width = '50px' height='50px'/> 
            <h3>Meadin Menbere</h3>
            <p>Full Stack Developer</p>
            <a href="https://www.linkedin.com/in/meadin-menbere/" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>

  );
}

export default WelcomePage;
