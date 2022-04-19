import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { updateService, fetchServiceById } from "../../axios-services";
import "../../style/EditService.css";

const EditService = ({ token }) => {
  const [service, setService] = useState({});
  const [editedService, setEditedService] = useState({});
  const params = useParams();
  const { serviceId } = params;
  const navigate = useNavigate();

  const handleService = async () => {
    try {
      const singleService = await fetchServiceById(serviceId);
      setService(singleService);
      setEditedService(singleService);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedService = await updateService(
        token,
        serviceId,
        editedService
      );
      setService(updatedService);
      setEditedService(updatedService);
      if (updatedService.category === "facial") {
        navigate("/facials");
      } else if (updatedService.category === "massage") {
        navigate("/massage");
      } else if (updatedService.category === "both") {
        navigate("/facials");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleService();
  }, []);

  return (
    <div className="edit-admin-container">
      <div className="edit-service-content">
        <form className="edit-service-container" onSubmit={handleSubmit}>
          <div className="edit-form-content">
            <div className="my-service-edit-header">Edit Service</div>
            <label htmlFor="name" className="my-service-form-label">
              Service Name
            </label>
            <input
              className="my-service-form-input"
              placeholder="Facial and Massage Package"
              value={editedService.name}
              onChange={(event) => {
                setEditedService({
                  ...editedService,
                  name: event.target.value,
                });
              }}
            />
            <label htmlFor="name" className="my-account-form-label">
              Description
            </label>
            <input
              className="my-service-form-input"
              placeholder="Includes 60 minute massage with deep enzyme facial"
              value={editedService.description}
              onChange={(event) => {
                setEditedService({
                  ...service,
                  description: event.target.value,
                });
              }}
            />
            <label htmlFor="name" className="my-service-form-label">
              Category
            </label>
            <input
              className="my-service-form-input"
              placeholder="facial, massage, or both"
              value={editedService.category}
              onChange={(event) => {
                setEditedService({
                  ...editedService,
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
              value={editedService.price}
              onChange={(event) => {
                setEditedService({
                  ...editedService,
                  price: event.target.value,
                });
              }}
            />
            <button className="edit-my-service-save-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditService;
