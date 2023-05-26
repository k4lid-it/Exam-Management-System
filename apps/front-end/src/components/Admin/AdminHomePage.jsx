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
          <button>View Exam Rooms</button>
        </Link>
        
        <Link to="/admin/tickets">
          <button>View all IT Support Tickets</button>
        </Link>

        <Link to="/admin/assigned-tickets">
          <button>View my IT Support Tickets</button>
        </Link>
        
      </div>
    </div>
    // </div> </div>
  );
}

export default HomePage;
