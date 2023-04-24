import React from "react";
import "./Register.css";
function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">XpressSocial</h3>
          <span className="loginDesc">
            Connect with people and world around you:)
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder=" Conform Password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Login to Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
