import React, { useState, useEffect } from "react";
import Appointment from "./Appointment";
import "../../style/Service.css";
import { fetchCategory, deleteService } from "../../axios-services/index";

const Massage = ({ token }) => {
  const [massage, setMassage] = useState([]);
  const [both, setBoth] = useState([]);

  const handleMassage = async () => {
    const fetchedMassage = await fetchCategory("massage");
    setMassage(fetchedMassage);
  };

  const handleBoth = async () => {
    const fetchedBoth = await fetchCategory("both");
    setBoth(fetchedBoth);
  };

  const handleDelete = async (serviceId) => {
    try {
      const success = await deleteService(token, serviceId);
      if (success) {
        const newMassage = massage.filter(
          (singleMassage) => singleMassage.id !== serviceId
        );
        const newBoth = both.filter(
          (bothService) => bothService.id !== serviceId
        );
        setMassage(newMassage);
        setBoth(newBoth);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleMassage();
    handleBoth();
  }, []);

  return (
    <>
      <Appointment />
      <div className="menu">
        <div className="service-menu-title">Massage</div>
        <div className="service-menu-container">
          {massage.map((service) => {
            const { id, name, description, price } = service;
            return (
              <div className="service-container">
                <div className="service-title">
                  <div className="service-name">{name}</div>
                  <div className="service-price">{price}</div>
                </div>
                <div className="service-description">{description}</div>
                {token && <button className="service-button">Edit</button>}
                {token && (
                  <button
                    className="service-button"
                    onClick={() => {
                      handleDelete(id);
                    }}
                  >
                    Delete
                  </button>
                )}
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
                {token && <button className="service-button">Edit</button>}
                {token && (
                  <button
                    className="service-button"
                    onClick={() => {
                      handleDelete(id);
                    }}
                  >
                    Delete
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Massage;
