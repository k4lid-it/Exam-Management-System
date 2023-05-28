import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Acceptticket.css';
import HeaderIT from '../HeaderIT';
import axios from 'axios';

export default function Acceptticket() {
  const [isLoading, setIsLoading] = useState(true);

  let [examRoomData, setExamRoomData] = useState([]);
  // examRoomData = [{}];
  const token = localStorage.getItem('auth');
  const id = sessionStorage.getItem('ticketID');
  // const num = parseInt(id, 10);
  const url = `http://localhost:4000/support/ticket-details?id=${id}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Unauthorized") {
          window.location.href = "../security-stop";
        } else {
          setExamRoomData(data);
          // console.log(examRoomData);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, [token]);


  const accept = () => {
    axios
      .post(
        `http://localhost:4000/support/ticket-accept?id=${id}`,
        {
          ticketID: id
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
