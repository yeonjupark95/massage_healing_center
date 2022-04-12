import React from "react";
import { Link } from "react-router-dom";
import "../../style/Home.css";

const Service = () => {
  return (
    <>
      <h1> Our Services </h1>
      <div className="service">
        <div> The Step Your Routine Is Missing </div>
        <div>
          Facials supercharge your skincare routine, make your home care work
          harder, and help you reach your goals
        </div>
        <button> Book A Facial </button>
      </div>
      <div className="service">
        <div> The Step Your Routine Is Missing </div>
        <div>
          Facials supercharge your skincare routine, make your home care work
          harder, and help you reach your goals
        </div>
        <button> Book A Massage </button>
      </div>
    </>
  );
};

export default Service;
