import React, { useState } from 'react';
import './RequestITsupportPage.css';
import HeaderNonAdmin from "../HeaderNonAdmin";
import axios from 'axios';

const RequestITsupportPage = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedSeat, setSelectedSeat] = useState('');
  const [issueDescription, setIssueDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://examportalseuserver.herokuapp.com/invigilator/ticket", {

      room: sessionStorage.getItem("selectedRoom"),
      type: selectedService,
      description: issueDescription,
      seat: selectedSeat

    },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
  };

  const token = localStorage.getItem('auth');

  const seatNumbers = JSON.parse(sessionStorage.getItem('seatNumbers'));

  const optionElements = seatNumbers.map((seatNumber) => (
    <option key={seatNumber} value={seatNumber}>
      {seatNumber}
    </option>
  ));



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
                <option value="Password">Password</option>
                <option value="Power Bank">Power Bank</option>
                <option value="Network">Network</option>
                <option value="Other">Other</option>

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
                <option value="0">Select</option>
                {optionElements}
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


  {/* for @KHALED: you can use this code below to make when the send button is clicked it takes the user back to his exam room page or his home page, you have done something very similar in the AdminAcceptTicket.jsx , the code below needs the {Link} to be imported, and the {accept} to be defined. */}
            {/* <Link to="">
                        <button type='submit' onClick={accept}>
                            Send
                        </button>
                    </Link> */}


{/* then dont forget to delete this old button below*/}
            <button type="submit">Send</button>
          </div>

          

        </form>
      </div>
    </div>
  );
};

export default RequestITsupportPage;
