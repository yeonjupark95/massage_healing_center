import React from "react";
import { Link } from "react-router-dom";
import "../style/Navigation.css";

const Navigation = ({ token, handleLogOut }) => {
  return (
    <>
      <div className="nav-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">Massage Healing Center</div>
        </Link>
        <div className="nav-categories-container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="service-link">Home</div>
          </Link>
          <Link to="/facials" style={{ textDecoration: "none" }}>
            <div className="service-link">Facials</div>
          </Link>
          <Link to="/massage" style={{ textDecoration: "none" }}>
            <div className="service-link">Massage</div>
          </Link>
          <Link to="/wax" style={{ textDecoration: "none" }}>
            <div className="service-link">Wax</div>
          </Link>
          <Link to="/aboutus" style={{ textDecoration: "none" }}>
            <div className="service-link">About Us</div>
          </Link>
          {token && (
            <Link to="/admin" style={{ textDecoration: "none" }}>
              <div className="service-link">Admin</div>
            </Link>
          )}
          {token && (
            <button onClick={handleLogOut} className="account-logout-button">
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
