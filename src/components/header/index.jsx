import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="header-wrapper">
      <div
        className="container d-flex justify-content-between align-items-center"
        style={{ height: "100%" }}
      >
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="d-flex justify-content-between align-items-center links">
          <p>Home</p>
          <p>About Us</p>
          <p>Projects</p>
        </div>
        {location?.pathname == "/" || location?.pathname == "/task-posts"? (
          <Link to={"/login"}>
            <button className="btn btn-dark">Login</button>
          </Link>
        ) : (
          <Link to={"/"}>
            <button className="btn btn-dark">Login out</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
