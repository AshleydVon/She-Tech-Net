import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';  // Assuming LOGIN_USER mutation exists in SHE-TECH-IN
import Auth from '../utils/auth';  // Authentication service
import '../styles/signin.css';

function SignIn() {  // Changed to SignIn for SHE-TECH-IN
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [loginUser, { error }] = useMutation(LOGIN_USER);  // Using LOGIN_USER for SHE-TECH-IN

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await loginUser({
        variables: { email: formState.email, password: formState.password },
      });
      const token = data.login.token;
      Auth.login(token);  // Handle login with Auth service
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-input"
            placeholder="Enter your email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="form-input"
            placeholder="Enter your password"
            name="password"
            type="password"
            id="password"
            onChange={handleChange}
          />
        </div>

        {error && <div className="error-text">Invalid email or password</div>}

        <div className="form-group">
          <button type="submit" className="btn">Sign In</button>
        </div>
      </form>

      <p>Don’t have an account? <Link to="/signup">Sign Up</Link></p> {/* Link to SignUp page */}
    </div>
  );
}

export default SignIn;
