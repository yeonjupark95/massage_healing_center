import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createService } from "../../axios-services";
import "../../style/EditService.css";

const AddService = ({ token }) => {
  const blankService = {
    name: "",
    description: "",
    category: "",
    price: null,
  };
  const [newService, setNewService] = useState(blankService);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createService(token, newService);
      setNewService(newService);
      if (newService.category === "facial") {
        navigate("/facials");
      } else if (newService.category === "massage") {
        navigate("/massage");
      } else if (newService.category === "both") {
        navigate("/facials");
      }
    } catch (error) {
      console.dir(error);
    }
  };

  return (
    <div className="edit-admin-container">
      <div className="edit-service-content">
        <form className="edit-service-container" onSubmit={handleSubmit}>
          <div className="edit-form-content">
            <Link style={{ textDecoration: "none" }} to="/admin">
              <div className="back-to-my-account">Back to Dashboard</div>
            </Link>
            <div className="my-service-edit-header">Add Service</div>
            <label htmlFor="name" className="my-service-form-label">
              Service Name
            </label>
            <input
              className="my-service-form-input"
              placeholder="Facial and Massage Package"
              value={newService.name}
              onChange={(event) => {
                setNewService({ ...newService, name: event.target.value });
              }}
            />
            <label htmlFor="name" className="my-account-form-label">
              Description
            </label>
            <input
              className="my-service-form-input"
              placeholder="Includes 60 minute massage with deep enzyme facial"
              value={newService.description}
              onChange={(event) => {
                setNewService({
                  ...newService,
                  description: event.target.value,
                });
              }}
            />
            <label htmlFor="name" className="my-service-form-label">
              Category
            </label>
            <input
              className="my-service-form-input"
              placeholder="Massage"
              value={newService.category}
              onChange={(event) => {
                setNewService({
                  ...newService,
                  category: event.target.value.toLowerCase(),
                });
              }}
            />
            <label htmlFor="name" className="my-account-form-label">
              Price (USD)
            </label>
            <input
              className="my-service-form-input"
              placeholder="100"
              value={newService.price}
              onChange={(event) => {
                setNewService({ ...newService, price: event.target.value });
              }}
            />
            <button className="edit-my-service-save-button">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
