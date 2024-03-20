import React from "react";
import "../styles/main.css";
import image from "../assets/images/1.png";
import GoogleImage from "../assets/images/google.png";
function RegisterForm() {
  return (
    <div className="container">
      <div className="image-box">
        <div className="box-label">Create Account</div>
        <img src={image} alt="Account" />
      </div>
      <div className="register-form">
        {/* <h2>Register</h2> */}
        <form className="form-decora">
          <div className="form-field">
            <label className="label-email">Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-field">
            <label className="label-password">Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button className="btn-create-acc" type="submit">
            Create Account
          </button>
          <button className="google-button">
            Sign in With google
            <img className="google-logo" src={GoogleImage} alt="Google" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
