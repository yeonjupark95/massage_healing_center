import React from "react";
import "../../style/Service.css";
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
        <div className="appointment-content">
        To schedule an appintment, please text 214-668-7839
        </div>
      </div>
    </div>
  );
};
export default FacialAppointment;
