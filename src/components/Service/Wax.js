import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/Service.css";
import { fetchCategory, deleteService } from "../../axios-services/index";

const Wax = ({ token }) => {
  const navigate = useNavigate();
  const [wax, setWax] = useState([]);

  const handleWax = async () => {
    const fetchedWax = await fetchCategory("wax");
    setWax(fetchedWax);
  };

  const handleDelete = async (serviceId) => {
    try {
      const success = await deleteService(token, serviceId);
      if (success) {
        const newWax = wax.filter((singleWax) => singleWax.id !== serviceId);
        setWax(newWax);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleWax();
  }, []);

  return (
    <>
      <div className="menu">
        <div className="service-menu-title">Wax</div>
        <div className="service-menu-container">
          {wax.map((service) => {
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
      </div>
    </>
  );
};
export default Wax;
