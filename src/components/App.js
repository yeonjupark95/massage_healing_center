import React, { useState, useEffect } from "react";
// getAPIHealth is defined in our axios-services directory index.js
// you can think of that directory as a collection of api adapters
// where each adapter fetches specific info from our express server's /api route
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home/Home";
import Service from "./Home/Service";
import Reviews from "./Home/Reviews";
import Facial from "./Service/Facial";
import Massage from "./Service/Massage";
import AboutUs from "./AboutUs";
import Appointment from "./Service/Appointment";
import FAQ from "./Home/FAQ";
import Navigation from "./Navigation";
import { getAPIHealth } from "../axios-services";
import "../style/App.css";

const App = () => {
  const [APIHealth, setAPIHealth] = useState("");

  useEffect(() => {
    // follow this pattern inside your useEffect calls:
    // first, create an async function that will wrap your axios service adapter
    // invoke the adapter, await the response, and set the data
    const getAPIStatus = async () => {
      const { healthy } = await getAPIHealth();
      setAPIHealth(healthy ? "api is up! :D" : "api is down :/");
    };

    // second, after you've defined your getter above
    // invoke it immediately after its declaration, inside the useEffect callback
    getAPIStatus();
  }, []);

  return (
    <div className="app-container">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Service />
              <FAQ />
              <Reviews />
            </>
          }
        />
        <Route
          path="/facials"
          element={
            <>
              <Appointment />
              <Facial />
            </>
          }
        />
        <Route
          path="/massage"
          element={
            <>
              <Massage />
              <Appointment />
            </>
          }
        />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default App;
