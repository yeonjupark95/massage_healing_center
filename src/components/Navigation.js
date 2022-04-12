import React from "react";
import { Link } from "react-router-dom";
import "../style/Navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="nav-container">
          <div className="logo">Massage Healing Center</div>
        <div className="nav-categories-container">
          <div className="facials-link">Facials</div>
          <div className="plant-categories-link">Massage</div>
          <div className="plant-categories-link">Appointments</div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
