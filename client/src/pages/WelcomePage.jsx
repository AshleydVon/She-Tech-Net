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
            Join our community and explore opportunities designed to empower women in tech. Discover courses, events, jobs, and mentorship tailored just for you.
          </p>
        </div>

        {/* Sign-up and Sign-in buttons on the right side */}
        <div className="auth-buttons mockup-style">
          <Link to="/signup" className="btn signup-btn">Sign Up</Link>
          <Link to="/login" className="btn signin-btn">Sign In</Link>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
