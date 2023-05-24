import React from "react";
import { Link } from "react-router-dom";
import "./AdminHomePage.css";
import HeaderAdmin from "../HeaderAdmin";

function HomePage() {
  return (
    // <div className="overWhiteBox"> <div className="whiteBox">
    <div className="admin-home-page">
      <HeaderAdmin />
      <div className="admin-home-page-buttons">
        <Link to="/AdminExamsPage">
          <button>View Exams</button>
        </Link>
        <Link to="/tickets">
          <button>View IT Support Tickets</button>
        </Link>
        <Link to="/exams-secret-key">
          <button>View Exams' Secret Key</button>
        </Link>
      </div>
    </div>
    // </div> </div>
  );
}

export default HomePage;
