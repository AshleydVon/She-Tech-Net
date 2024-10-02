import { Link } from 'react-router-dom';
import '../styles/logout.css'; 
import Auth from '../utils/auth'; // Authentication utility to handle logout

function LogoutPage() {
  const handleLogout = () => {
    Auth.logout();
  };

  return (
    <div className="logout-container">
      <h2>Are you sure you want to log out?</h2>
      <div className="logout-buttons">
        <button onClick={handleLogout} className="btn logout-btn">Log Out</button>
        <Link to="/">
          <button className="btn cancel-btn">Cancel</button>
        </Link>
      </div>
    </div>
  );
}

export default LogoutPage;
