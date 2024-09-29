import { Link } from 'react-router-dom';
import '../styles/Welcomepage.css'
// import Navbar from '../components/Navbar'; 

function WelcomePage() {
  return (
    <>
      {/* Simple Navbar */}
      {/* <Navbar /> */}

      {/* Welcome content aligned with mockup design */}
      <div className="welcome-container mockup-style">
        <div className="welcome-text">
          <h1>Welcome to SHE-TECH-NET</h1>
          <p>
          Unlock your potential with SHE-TECH-NET, a thriving community dedicated to uplifting and empowering women in technology. Dive into expertly crafted courses, exclusive events, exciting career opportunities, and personalized mentorship that are all designed to support and elevate your journey in tech. Join us and start building the future today.
          </p>
        </div>

        {/* Sign-up and Sign-in buttons on the right side */}
        <div className="auth-buttons mockup-style">
          <Link to="/signup" className="btn signup-btn">Sign Up</Link>
          <Link to="/signin" className="btn signin-btn">Sign In</Link>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
