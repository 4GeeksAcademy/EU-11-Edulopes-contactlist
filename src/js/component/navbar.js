import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-light mb-3">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Your Contact List</span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-success">Add New Contact</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
