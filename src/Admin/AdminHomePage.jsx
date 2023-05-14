import React from "react";
import { Link } from "react-router-dom";
import "./AdminHomePage.css";

function HomePage() {
  return (
    <div className="overWhiteBox"> <div className="whiteBox">
    <div className="admin-home-page">
      <div className="admin-home-page-buttons">
        <Link to="/exams">
          <button>View Exams</button>
        </Link>
        <Link to="/it-support-tickets">
          <button>View IT Support Tickets</button>
        </Link>
        <Link to="/exams-secret-key">
          <button>View Exams' Secret Key</button>
        </Link>
      </div>
    </div>
    </div> </div>
  );
}

export default HomePage;
