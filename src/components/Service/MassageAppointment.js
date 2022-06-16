import React from "react";
import "../../style/Service.css";
import massage from "../img/massage.jpeg";

const MassageAppointment = () => {
  return (
    <div className="appointment-section-container massage">
      <img className="appointment-facial-img" src={massage} />
      <div className="appointment-copy-container">
        <div className="appointment-header">
          Say Goodbye to Minor Aches and Pains
        </div>
        <div className="appointment-content">
          To schedule an appintment, please text 214-668-7839
        </div>
      </div>
    </div>
  );
};
export default MassageAppointment;
