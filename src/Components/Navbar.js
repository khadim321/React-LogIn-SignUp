import React from "react";
import { NavLink } from "react-router-dom";
import payday from "../Images/payday.png";
import "./Navbar.css";

const Navbar = () => {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <div className="logo-img">
  <img src={payday} className="img-style"/>
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="nav-section">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/hirestaff">Hire Staff</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/becomeceo">Become CEO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/howtohire">How to hire</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/payday">Pay Day Merch</NavLink>
        </li>
        <div className="nav-button">
        <button className="btn btn-secondary">CONNECT VALLET</button>
        </div>
      </ul>
      </div>
    </div>
  </div>
</nav>    
        </>
    );
  }
  
  export default Navbar;