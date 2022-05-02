import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FacialAppointment from "./FacialAppointment";
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
      const success = await deleteService(token, serviceId);
      if (success) {
        const newFacials = facials.filter((facial) => facial.id !== serviceId);
        const newBoth = both.filter(
          (bothService) => bothService.id !== serviceId
        );
        setFacials(newFacials);
        setBoth(newBoth);
      }
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
    <div className="service-appointment">
      <FacialAppointment />
    </div>
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
        <div className="service-menu-container">
          {both.length
            ? both.map((service) => {
                const { id, name, description, price } = service;
                return (
                  <>
                    <div className="service-menu-title">Package</div>
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
                  </>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};
export default Facial;
