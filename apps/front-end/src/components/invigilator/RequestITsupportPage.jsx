import React, { useState } from 'react';
import './RequestITsupportPage.css';
import HeaderNonAdmin from "../HeaderNonAdmin";

const RequestITsupportPage = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedSeat, setSelectedSeat] = useState('');
  const [issueDescription, setIssueDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation logic here
  };



  return (
    
    <div>
    <HeaderNonAdmin />

    <div className="form-container">
      <h2>Request IT Support</h2>
      <form onSubmit={handleSubmit}>
        
      <div className="form-row">
          <label htmlFor="service-type">Service type:</label>
          <div className="form-input">
            <select
              id="service-type"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="1">Password</option>
              <option value="2">Power Bank</option>
              <option value="3">Network</option>
              <option value="4">Other</option>
              
            </select>
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="seat">Seat Number:</label>
          <div className="form-input">
            <select
              id="seat"
              value={selectedSeat}
              onChange={(e) => setSelectedSeat(e.target.value)}
              // required
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              {/* this data should represent actual student seat numbers in a room, I currently hard coded it */}
            </select>
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="description">Issue Description:</label>
          <div className="form-input">
            <textarea
              id="description"
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
              rows="4"
              cols="50"
              placeholder="Please describe the issue here...(Optional)"
            ></textarea>
          </div>
        </div>

        
          <div className="form-input">
            <button type="submit">Send</button>
          </div>
       
      </form>
    </div>
  </div>
  );
};

export default RequestITsupportPage;
