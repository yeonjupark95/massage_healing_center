import React from "react";
import { Link } from "react-router-dom";
import "../../style/Admin.css";

const AdminDash = () => {
  return (
    <div className="admin-dashboard-container ">
      <div className="admin-dashboard-content">
        <div className="admin-dashboard-header">Admin Dashboard</div>
        <div className="admin-dashboard">
          <div className="admin-dashboard-option">
            <Link to="/admin/addservice" className="admin-dashboard-links">
              Add Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
