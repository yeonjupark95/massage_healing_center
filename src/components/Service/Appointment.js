import React from "react";
import "../../style/Service.css";
import facial from "../img/hysonic-1.png";

const Appointment = () => {
  return (
    <div className="appointment-section-container">
      <img className-="appointment-facial-img" src={facial} />
      <div className="appointment-description">Relax. Restore. Rejuvenate.</div>
      <button> SCHEDULE AN APPOINTMENT </button>
    </div>
  );
};
export default Appointment;
