import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import "../styles/main.css";
import image from "../assets/images/1.png";
import GoogleImage from "../assets/images/google.png";
import api from "../api";

function LoginForm({ changeAuthState }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleGoogleSignIn = () => {
    // Implement the logic for signing in with Google here
    // This can involve using authentication libraries like Firebase or making API calls
    console.log("Signing in with Google...");
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Implement the logic for submitting the form (sign in or sign up) here
    // Retrieve the email and password values from the form fields and process them
    setLoading(true);
    try {
      await api.get('/sanctum/csrf-cookie');
      const response = await api.post('/api/login/', {
        email,
        password,
      });
      const { token } = response.data;

      localStorage.setItem('token', token);
      changeAuthState(true);
      history.push('/home');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      <div className="image-box">
        <div className="box-label">Welcome Back!</div>
        <img src={image} alt="Account" />
      </div>
      <div className="register-form">
        <form className="form-decora" onSubmit={handleFormSubmit}>
          <div className="form-field">
            <label className="label-email">Email</label>
            <input
              className="rounded-input"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => { setEmail(e.target.value) }}
              value={email}
            />
          </div>
          <div className="form-field">
            <label className="label-password">Password</label>
            <input
              className="rounded-input"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => { setPassword(e.target.value) }}
              value={password}
            />
          </div>
          <div className="btn-up-in">
            <button className="btn-SignUp" type="submit">
              Sign Up
            </button>

            {loading
              ? <button className="btn-SignIn">
                <CircularProgress style={{'color': 'white'}} />
              </button>
              : <button className="btn-SignIn" type="submit">
                Sign In
              </button>}
          </div>
          <h1 className="label-forget">Forgot Password</h1>

          <button className="google-button" onClick={handleGoogleSignIn}>
            Continue with Google
            <img className="google-logo" src={GoogleImage} alt="Google" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;