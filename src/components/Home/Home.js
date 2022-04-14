import React from "react";
import "../../style/Home.css";
import hysonic from "../img/hysonic-1.png";

const Home = () => {
  return (
    <>
      <div className="homepage-hysonic-container">
        <img className="homepage-hysonic-img" src={hysonic} alt="hysonic" />
        <div className="homepage-copy-container">
          <div className="homepage-header">
            Personalized Facials, Without The Fuss.
          </div>
          <div className="homepage-subhead">
            Using the best Korean technology
          </div>
          <button className="homepage-hysonic-button">Book A Facial</button>
        </div>
      </div>
    </>
  );
};

export default Home;
