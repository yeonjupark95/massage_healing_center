import React from "react";
import { Link } from "react-router-dom";
import "../../style/Home.css";
import facial from "../img/home-facial.png";
import massage from "../img/home-massage.jpeg";

const Service = () => {
  return (
    <>
      <div className="homepage-service-container">
        <img className="homepage-service-img" src={facial} alt="hysonic" />
        <div className="homepage-copy-container">
          <div className="homepage-header">
            Personalized Facials, Without The Fuss.
          </div>
          <div className="homepage-subhead">
            Using the best Korean technology
          </div>
          <button className="homepage-service-button">Book A Facial</button>
        </div>
      </div>
      <div className="homepage-service-container">
        <img className="homepage-service-img" src={massage} alt="hysonic" />
        <div className="homepage-copy-container">
          <div className="homepage-header">
            Korean Deep Tissue Massage
          </div>
          <div className="homepage-subhead">
            Using the best Korean technology
          </div>
          <button className="homepage-service-button">Book A Facial</button>
        </div>
      </div>
    </>
  );
};

export default Service;
