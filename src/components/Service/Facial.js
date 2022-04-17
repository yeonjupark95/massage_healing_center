import React, { useState } from "react";
import Appointment from "./Appointment";
import "../../style/Service.css";

const Facial = () => {
  const [services, setServices] = useState([]);

  const handleProducts = async() => {

  }

  return (
    <>
      <Appointment />
      <div className="service-menu-title">Facial</div>
      <div className="service-menu-container">
        <div className="service-title"></div>
        <div className="service-description"></div>
        <div className="service-price"></div>
      </div>
    </>
  );
};
export default Facial;
