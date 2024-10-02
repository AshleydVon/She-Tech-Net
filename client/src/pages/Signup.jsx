import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';  
import { ADD_USER } from '../utils/mutations'; 
import '../styles/signup.css'; 

function Signup() {
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      console.log(data);
      const token = data.addUser.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
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
    <div className="signup-container my-1">
      <Link to="/signin" className="signup-link">← Go to Sign In</Link>

      <h2 className="signup-heading">Sign Up</h2>
      <form onSubmit={handleFormSubmit} className="signup-form">
        <div className="signup-flex-row signup-space-between my-2">
          <label htmlFor="firstName" className="signup-label">First Name:</label>
          <input
            className="signup-input"
            placeholder="First"
            name="firstName"
            type="text"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="signup-flex-row signup-space-between my-2">
          <label htmlFor="lastName" className="signup-label">Last Name:</label>
          <input
            className="signup-input"
            placeholder="Last"
            name="lastName"
            type="text"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="signup-flex-row signup-space-between my-2">
          <label htmlFor="email" className="signup-label">Email:</label>
          <input
            className="signup-input"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="signup-flex-row signup-space-between my-2">
          <label htmlFor="pwd" className="signup-label">Password:</label>
          <input
            className="signup-input"
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="signup-flex-row signup-flex-end">
          <button type="submit" className="signup-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
