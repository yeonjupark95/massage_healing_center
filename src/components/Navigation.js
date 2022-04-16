import React from "react";
import { Link } from "react-router-dom";
import "../style/Navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <div className="logo">Massage Healing Center</div>
        </Link>
        <div className="nav-categories-container">
          <Link to="/">
            <div className="service-link">Home</div>
          </Link>
          <Link to="/facials">
            <div className="service-link">Facials</div>
          </Link>
          <Link to="/massage">
          <div className="service-link">Massage</div>
          </Link>
          <div className="service-link">Appointments</div>
          <Link to="/aboutus">
          <div className="service-link">About Us</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
