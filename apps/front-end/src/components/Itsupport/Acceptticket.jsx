import React from 'react';
import { Link } from 'react-router-dom';
import './Acceptticket.css';
import HeaderNonAdmin from '../HeaderNonAdmin';

export default function Acceptticket() {
  // Fetch ticket data from API or other source
  const fetchTicketData = () => {
    // Simulating an API call or data retrieval
    return {
      room: '103',
      date: '16/5/2023',
      time: '2:26 PM',
      examPeriod: '103',
      service: 'Password',
      Description: 'the QR code is not working, the student needs a password to access the exam, please hurry up! Thank you in advance. One Piece is your uncle!'
    };
  };

  // Call the fetchTicketData function to get the ticket data
  const ticketData = fetchTicketData();

  return (
    <div>
      <HeaderNonAdmin />

      <div className="container">
        <h2>IT Support Ticket</h2>
        <p className="ticket-information">Ticket Information:</p>

        <table className="tablee">
          <tbody>
            <tr>
              <td className="tdOne">Room:</td>
              <td className="tdTwo">{ticketData.room}</td>
            </tr>
            <tr>
              <td className="tdOne">Date:</td>
              <td className="tdTwo">{ticketData.date}</td>
            </tr>
            <tr>
              <td className="tdOne">Time:</td>
              <td className="tdTwo">{ticketData.time}</td>
            </tr>
            <tr>
              <td className="tdOne">Exam Period:</td>
              <td className="tdTwo">{ticketData.examPeriod}</td>
            </tr>
            <tr>
              <td className="tdOne">Service:</td>
              <td className="tdTwo">{ticketData.service}</td>
            </tr>
            <tr>
              <td className="tdOne">Description:</td>
              <td className="tdTwo">{ticketData.Description}</td>
            </tr>
          </tbody>
        </table>
        
        <div className="buttons">
          <Link to=""><button type='submit'>Accept</button></Link>
          
          {/* IMPORTAN! Change the link to the correct one, this link takes the user to the "IT-Support" open tickets page where it shows only Open tickets, but in case of an "Admin" user, it will show ALL tickets whether the ticket is Open, In-progress, orClosed. */}
          <Link to="/IT-support/open-tickets"><button type='submit'>Cancel</button></Link>
        </div>
      </div>
    </div>
  );
}