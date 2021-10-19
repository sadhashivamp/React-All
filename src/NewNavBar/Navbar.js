import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <h1>My Website</h1>
      <ul className="nav-list">
        <NavLink to="/">Main</NavLink>
        <NavLink to="/">Services</NavLink>
        <NavLink to="/">Login</NavLink>
        <NavLink to="/">Signup</NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
