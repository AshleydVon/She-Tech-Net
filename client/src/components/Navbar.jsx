import { Link } from 'react-router-dom';
import Auth from '../utils/auth'; 
import '../styles/Navbar.css';

function Navbar() {
  function handleLogout() {
    Auth.logout(); // Call the logout function to clear the token and redirect
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="navbar-links flex-row">
          <li className="mx-1">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="mx-1">
            <Link to="/events">Events</Link>
          </li>
          <li className="mx-1">
            <Link to="/mentorship">Mentorship</Link>
          </li>
          <li className="mx-1">
            <Link to="/jobs">Jobs</Link>
          </li>
          <li className="mx-1">
            <button onClick={handleLogout}>Logout</button> {/* Changed from Link to button */}
          </li>
        </ul>
      );
    }
    return null;
  }

  return (
    <header className="navbar">
      <div className="navbar-container flex-row">
        <div className="navbar-logo">
          <h1>
            <Link to="/">SHE-TECH-NET</Link>
          </h1>
        </div>
        <nav className="navbar-links-container">
          {showNavigation()}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
