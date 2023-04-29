import React, { useContext, useRef } from "react";
import "./Login.css";
import { AuthContext } from "../../components/context/AuthContext";
import { loginCall } from "../apiCalls";
import { CircularProgress } from "@mui/material";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

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
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? <CircularProgress className="progress" /> : "Login"}
            </button>
            <span className="loginForget">Forget Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress className="progress" />
              ) : (
                "Create new account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
