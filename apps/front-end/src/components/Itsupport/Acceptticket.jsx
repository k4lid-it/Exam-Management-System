import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Acceptticket.css';
import HeaderIT from '../HeaderIT';
import axios from 'axios';

export default function Acceptticket() {
  const [isLoading, setIsLoading] = useState(true);
  const [examRoomData, setExamRoomData] = useState(null);
  const token = localStorage.getItem('auth');
  const ticketID = sessionStorage.getItem('ticketID');

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/support/ticket-details?id=${ticketID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch ticket data');
        }

        const data = await response.json();
        if (data.message === 'Unauthorized') {
          window.location.href = '../security-stop';
        } else {
          setExamRoomData(data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTicketData();
  }, [token, ticketID]);

  const accept = () => {
    axios
      .post(
        `http://localhost:4000/support/ticket-details?id=${ticketID}`,
        {
          ticketID: ticketID
        },
        {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${token}`,
          }
        }
      )
      .then(response => {
        // Handle the response if needed
      })
      .catch(error => {
        // Handle the error if needed
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!examRoomData) {
    return <div>No data available</div>;
  }

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
            <tr>
              <td className="tdOne">Time:</td>
              <td className="tdTwo">{examRoomData.time}</td>
            </tr>
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
          <Link to="">
            <button type='submit' onClick={accept}>
              Accept
            </button>
          </Link>

          <Link to="/IT-support/open-tickets">
            <button type='submit'>
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
