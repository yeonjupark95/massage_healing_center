import React from "react";
import Appointment from "./Appointment";
import "../../style/Service.css";

const Facial = () => {
  return (
    <>
    <Appointment />
    <div className="service-menu-title">Facial</div>
      <div className="service-menu-container">
        <div className="service-title">Deep Cleaning Enzyme Peel</div>
        <div className="service-description"></div>
        <div className="service-price">85</div>
      </div>
    </>
  );
};
export default Facial;
