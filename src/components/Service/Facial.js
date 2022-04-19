import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Appointment from "./Appointment";
import "../../style/Service.css";
import { fetchCategory, deleteService } from "../../axios-services/index";

const Facial = ({ token }) => {
  const navigate = useNavigate();
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

  const handleDelete = async (serviceId) => {
    try {
      await deleteService(token, serviceId);
      navigate("/facials");
    } catch (error) {
      console.error(error);
    }
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
                {token && (
                  <button
                    className="service-button"
                    onClick={() => {
                      navigate(`/admin/editservice/${id}`);
                    }}
                  >
                    Edit
                  </button>
                )}
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
                {token && (
                  <>
                    <button
                      className="service-button"
                      onClick={() => {
                        navigate(`/admin/editservice/${id}`);
                      }}
                    >
                      Edit
                    </button>
                  </>
                )}
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
export default Facial;
