import React from "react";
import "../../style/Service.css";
import facial from "../img/hysonic-1.png";

const MassageAppointment = () => {
  return (
    <div className="appointment-section-container">
      <img className="appointment-facial-img" src={facial} />
      <div className="appointment-copy-container">
        <div className="appointment-header">Relax.<br/> Restore. Rejuvenate.</div>
        <button className="appointment-button">
          SCHEDULE AN APPOINTMENT
        </button>
      </div>
    </div>
  );
};
export default MassageAppointment;
