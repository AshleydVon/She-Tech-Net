import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import WelcomePage from './pages/WelcomePage';  
import Signup from './pages/Signup.jsx'
import SignIn from './pages/signin.jsx';
import HomePage from './pages/Home';
import MentorshipPage from './pages/Mentorship';
import CoursesPage from './pages/Courses';
import EventsPage from './pages/Events';
import JobsPage from './pages/Jobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <WelcomePage />
      },
      {
        path: 'signup',  // Correct route for Signup page
        element: <Signup />
      },
      {
        path: 'signin',  // Correct route for SignIn page
        element: <SignIn />
      },
      {
        path: 'home',
        element: <HomePage />
      },
      {
        path: 'mentorship',
        element: <MentorshipPage />
      },
      {
        path: 'courses',
        element: <CoursesPage />
      },
      {
        path: 'events',
        element: <EventsPage />
      },
      {
        path: 'jobs',
        element: <JobsPage />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
