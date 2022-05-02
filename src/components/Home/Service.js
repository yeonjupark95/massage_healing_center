import React from "react";
import "../../style/Home.css";
import { Link } from "react-router-dom";
import facial from "../img/home-facial.png";
import massage from "../img/home-massage.jpeg";

const Service = () => {
  return (
    <>
      <div className="homepage-service-container">
        <img className="homepage-service-img" src={facial} alt="hysonic" />
        <div className="homepage-copy-container">
          <div className="homepage-header">
            Regenerate Youthful Glow with Facials
          </div>
          <div className="homepage-subhead">
            Using the best Korean Local Dynamic Micro (LDM) water drop lifting
            technology
          </div>
          <Link to="/facials" style={{ textDecoration: "none" }}>
            <button className="homepage-service-button">Book A Facial</button>
          </Link>
        </div>
      </div>
      <div className="homepage-service-container">
        <img className="homepage-service-img" src={massage} alt="hysonic" />
        <div className="homepage-copy-container">
          <div className="homepage-header">Korean Deep Tissue Massage</div>
          <div className="homepage-subhead">
            Personalized massage to release your body stress, aches, and chronic
            pain
          </div>
          <Link to="/massage" style={{ textDecoration: "none" }}>
            <button className="homepage-service-button">Book A Massage</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Service;
