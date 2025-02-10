import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

const navigate = useNavigate(); // Initialize navigation

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
        <a className="navbar-brand" href="/">Event Management</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#features">Home</a></li>
            <li className="nav-item"><button className="nav-link btn btn-primary text-white" onClick={() => navigate("/signup")}>Sign Up</button></li>
            <li className="nav-item"><button className="nav-link btn btn-primary text-white" onClick={() => navigate("/signin")}>Sign In</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
