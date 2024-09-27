import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Reusing the Navbar component
import Footer from '../components/Footer'; // Assuming a Footer component
import '../styles/HomePage.css';

function HomePage() {
  return (
    <>
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Main content: 2x2 Grid for Courses, Events, Mentorship, Jobs */}
      <div className="home-container">
        <div className="home-grid">
          <Link to="/courses" className="grid-item">
            <h2>Courses</h2>
          </Link>
          <Link to="/events" className="grid-item">
            <h2>Events</h2>
          </Link>
          <Link to="/mentorship" className="grid-item">
            <h2>Mentorship</h2>
          </Link>
          <Link to="/jobs" className="grid-item">
            <h2>Jobs</h2>
          </Link>
        </div>
      </div>

     
    </>
  );
}

export default HomePage;
