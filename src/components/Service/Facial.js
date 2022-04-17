import React, { useState, useEffect } from "react";
import Appointment from "./Appointment";
import "../../style/Service.css";
import { fetchCategory } from "../../axios-services/index";

const Facial = () => {
  const [facials, setFacials] = useState([]);
  const [both, setBoth] = useState([]);

  const handleFacials = async () => {
    const fetchedFacials = await fetchCategory("facial");
    setFacials(fetchedFacials);
  };

  const handleBoth = async () => {
    const fetchedBoth = await fetchCategory("both");
    setBoth(fetchedBoth);
  };

  useEffect(() => {
    handleFacials();
    handleBoth();
  }, []);

  return (
    <>
      <Appointment />
      <div className="menu">
        <div className="service-menu-title">Facial</div>
        <div className="service-menu-container">
          {facials.map((service) => {
            const { id, name, description, price } = service;
            return (
              <div className="service-container">
                <div className="service-title">
                  <div className="service-name">{name}</div>
                  <div className="service-price">{price}</div>
                </div>
                <div className="service-description">{description}</div>
              </div>
            );
          })}
        </div>
        <div className="service-menu-title">Package</div>
        <div className="service-menu-container">
          {both.map((service) => {
            const { id, name, description, price } = service;
            return (
              <div className="service-container">
                <div className="service-title">
                  <div className="service-name">{name}</div>
                  <div className="service-price">{price}</div>
                </div>
                <div className="service-description">{description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Facial;
