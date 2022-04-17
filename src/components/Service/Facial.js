import React, { useState, useEffect } from "react";
import Appointment from "./Appointment";
import "../../style/Service.css";
import { fetchCategory } from "../../axios-services/index";

const Facial = () => {
  const [facials, setFacials] = useState([]);

  const handleFacials = async () => {
    const fetchedFacials = await fetchCategory("facial");
    setFacials(fetchedFacials);
  };

  useEffect(() => {
    handleFacials();
  }, []);

  return (
    <>
      <Appointment />
      <div className="service-menu-title">Facial</div>
      <div className="service-menu-container">
        {facials.map((service) => {
          const { id, name, description, price } = service;
          return (
            <>
              <div className="service-title">{name}</div>
              <div className="service-description">{description}</div>
              <div className="service-price">{price}</div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Facial;
