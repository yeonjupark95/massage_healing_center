import React from "react";
import "../../style/Service.css";
import { Link } from "react-router-dom";
import facial from "../img/hysonic-1.png";

const FacialAppointment = () => {
  return (
    <div className="appointment-section-container">
      <img className="appointment-facial-img" src={facial} />
      <div className="appointment-copy-container">
        <div className="appointment-header">
          Relax.
          <br /> Restore. Rejuvenate.
        </div>
        <a
          href="https://calendly.com/massagehealingcenter/appointment"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button className="appointment-button">
            SCHEDULE AN APPOINTMENT
          </button>
        </a>
        <div className="appointment-other">
          {" "}
          *Text 214-668-7839 for other availabilities{" "}
        </div>
      </div>
    </div>
  );
};
export default FacialAppointment;
