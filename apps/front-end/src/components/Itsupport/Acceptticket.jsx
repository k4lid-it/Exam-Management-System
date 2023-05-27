import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Acceptticket.css';
import HeaderIT from '../HeaderIT';
import axios from 'axios';

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

  const [examRoomData, setExamRoomData] = useState([]);
  const token = localStorage.getItem('auth');
  const ticketID = sessionStorage.getItem('ticketID');

  const url = `http://localhost:4000/support/ticket-details?id=${ticketID}`;
  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Unauthorized") { window.location.href = "../security-stop"; }
        else {
          setExamRoomData(data);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, [token]);

  // console.log(examRoomData);
  // Call the fetchTicketData function to get the ticket data
  const ticketData = fetchTicketData();

  const accept = (() => {

    axios.post(
      'http://localhost:4000/support/ticket-details?id=${ticketID}',
      {
        ticketID: ticketID
      },
      {
        headers: {
          'Accept': 'application/json',
          Authorization: `Bearer ${token}`,
        }

      })
  })

  return (
    <div>
      <HeaderIT />

      <div className="container">
        <h2>IT Support Ticket</h2>
        <p className="ticket-information">Ticket Information:</p>

        <table className="tablee">
          <tbody>
            <tr>
              <td className="tdOne">Room:</td>
              <td className="tdTwo">{examRoomData.room}</td>
            </tr>
            {/* <tr>
              <td className="tdOne">Date:</td>
              <td className="tdTwo">{examRoomData.date}</td>
            </tr> */}
            <tr>
              <td className="tdOne">Time:</td>
              <td className="tdTwo">{examRoomData.time}</td>
            </tr>
            {/* <tr>
              <td className="tdOne">Exam Period:</td>
              <td className="tdTwo">{examRoomData.examPeriod}</td>
            </tr> */}
            <tr>
              <td className="tdOne">Service:</td>
              <td className="tdTwo">{examRoomData.type}</td>
            </tr>
            <tr>
              <td className="tdOne">Description:</td>
              <td className="tdTwo">{examRoomData.description}</td>
            </tr>
          </tbody>
        </table>

        <div className="buttons">
          <Link to=""><button type='submit' onClick={() => {
            accept();
          }}>Accept</button></Link>

          {/* IMPORTAN! Change the link to the correct one, this link takes the user to the "IT-Support" open tickets page where it shows only Open tickets, but in case of an "Admin" user, it will show ALL tickets whether the ticket is Open, In-progress, orClosed. */}
          <Link to="/IT-support/open-tickets"><button type='submit'>Cancel</button></Link>
        </div>
      </div>
    </div>
  );
}