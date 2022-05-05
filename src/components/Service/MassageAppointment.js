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
        <div className="appointment-other massage">
          {" "}
          *Text 214-668-7839 for other availabilities{" "}
        </div>
      </div>
    </div>
  );
};
export default MassageAppointment;
