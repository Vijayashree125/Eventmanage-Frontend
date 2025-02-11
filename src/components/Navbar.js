import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

const navigate = useNavigate(); // Initialize navigation

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a class="navbar-brand head" href="/">Event Management</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link fs-5 mt-1" href="#home">Home</a></li>&nbsp;&nbsp;
            <li className="nav-item"><a className="nav-link fs-5 mt-1" href="#features">Features</a></li>&nbsp;&nbsp;
            <li className="nav-item"><a className="nav-link fs-5 mt-1" href="#aboutus">Aboutus</a></li>&nbsp;&nbsp;
            <li className="nav-item"><button class="gradient-btn" onClick={() => navigate("/signup")}>Sign Up</button></li>&nbsp;&nbsp;
            <li className="nav-item"><button class="gradient-btn" onClick={() => navigate("/signin")}>Sign In</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
