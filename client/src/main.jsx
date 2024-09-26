import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
<<<<<<< HEAD:She-Net-Tech/client/src/main.jsx
import WelcomePage from './pages/WelcomePage';  // Import the WelcomePage
import Signup from './pages/Signup.jsx'
import SignIn from './pages/signin.jsx';
import HomePage from './pages/Home';
import MentorshipPage from './pages/Mentorship';
import CoursesPage from './pages/Courses';
import EventsPage from './pages/Events';
import JobsPage from './pages/Jobs';
// import Login from './pages/Login';  // Assuming Login is already defined
// import Signup from './pages/Signup';  // Assuming Signup is already defined

=======
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.js';
import NoMatch from './pages/NoMatch.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Success from './pages/Success.js';
import OrderHistory from './pages/OrderHistory.js';
>>>>>>> 0aa0a8f85606f7ad263516062c00de7572ef9b91:client/src/main.jsx

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // Set WelcomePage as the default route
        element: <WelcomePage />  // Welcome page for first-time visitors
      },
      {
        path: '/signup',
        element: <Signup />  // Render the Signup page for SHE-TECH-IN
      },
      
      {
        path: '/signin',
        element: <SignIn />  // Render the SignIn page for SHE-TECH-IN
      },
      
      {
        path: '/home',  // Home page after login
        element: <HomePage />  // Home page for SHE-TECH-IN
      }, 
       
      
      {
        path: '/mentorship',
        element: <MentorshipPage />  // Mentorship section
      }, 
      {
        path: '/courses',
        element: <CoursesPage />  // Courses section
      }, 
      {
        path: '/events',
        element: <EventsPage />  // Events section
      }, 
      {
        path: '/jobs',
        element: <JobsPage />  // Jobs section
      }
    
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
