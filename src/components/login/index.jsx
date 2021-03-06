import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/images/logo.svg";
import login from "../../assets/images/login-news.jpg";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const LoginPage = () => {

  const history = useNavigate()
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const Login = () => {
    if(userName === "admin" && password === "admin123"){
      history("/news")
    }else{
      message.error("Please check username or password is correct!")
    }
  }
  

  return (
    <main className="d-flex align-items-center min-vh-90 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img src={login} alt="login" className="login-card-img" />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <div className="brand-wrapper">
                  <img src={logo} alt="logo" className="logo" />
                </div>
                <p className="login-card-description">Sign into your account</p>
                <form action="#!">
                  <div className="form-group">
                    <label for="login" className="sr-only">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="email"
                      className="form-control"
                      placeholder="Username"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label for="password" className="sr-only">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="***********"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                    <input
                      name="login"
                      id="login"
                      className="btn btn-block login-btn mb-4"
                      type="button"
                      value="Login"
                      onClick={Login}
                    />
                </form>
                <a href="#!" className="forgot-password-link">
                  Forgot password?
                </a>
                <p className="login-card-footer-text">
                  Don't have an account?{" "}
                  <a href="#!" className="text-reset">
                    Register here
                  </a>
                </p>
                <nav className="login-card-footer-nav">
                  <a href="#!">Terms of use.</a>
                  <a href="#!">Privacy policy</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default LoginPage;
