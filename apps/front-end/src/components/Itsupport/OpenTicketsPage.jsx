import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ITtickets.css';
import HeaderIT from '../HeaderIT';
import { io } from 'socket.io-client';

function OpenTicketsITsupportPage() {
  // Mock data for IT support tickets
  const ITSupportTicketData = [
    {
      id: 1,
      room: '111',
      date: '2023-05-21',
      time: '10:00 AM',
      examPeriod: '8:00 - 10:00 AM',
      service: 'Password',
      state: 'Open',
    },
    {
      id: 2,
      room: '112',
      date: '2023-05-21',
      time: '2:00 PM',
      examPeriod: '8:00 - 10:00 AM',
      service: 'Power Bank',
      state: 'Open',
    },
    {
      id: 3,
      room: '113',
      date: '2023-05-21',
      time: '2:00 PM',
      examPeriod: '8:00 - 10:00 AM',
      service: 'Network',
      state: 'Open',
    },
    {
      id: 4,
      room: '114',
      date: '2023-05-21',
      time: '2:00 PM',
      examPeriod: '8:00 - 10:00 AM',
      service: 'Other',
      state: 'Open',
    },
    {
      id: 5,
      room: '115',
      date: '2023-05-21',
      time: '2:00 PM',
      examPeriod: '8:00 - 10:00 AM',
      service: 'Power Bank',
      state: 'Open',
    },
    // temporary local data for IT support tickets...
  ];

  const [examRoomData, setExamRoomData] = useState([]);
  const token = localStorage.getItem('auth');

  const url = `http://localhost:4000/support/Home`;
  function GetData() {
    const fetchData = () => {
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
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };

    useEffect(() => {
      fetchData();
    }, [token]);

    const socket = io("http://localhost:4000");

    socket.on('ticketNew', () => {
      fetchData();
    });
  }

  GetData();


  // Map over the IT support ticket data and create a table row for each ticket
  const ticketRows = examRoomData.map((ticket) => (
    <tr key={ticket.id}>
      <td>
        <Link to={`/accept-ticket/${ticket.id}`}
          onClick={() => sessionStorage.setItem('ticketID', ticket.id)}        >View Ticket</Link>
      </td>
      <td>{ticket.room}</td>
      {/* <td>{ticket.date}</td> */}
      <td>{ticket.time}</td>
      {/* <td>{ticket.examPeriod}</td> */}
      <td>{ticket.type}</td>
      <td>{ticket.status}</td>
    </tr>
  ));

  return (
    <div>
      <HeaderIT />

      <div className='ITsupportPage-container'>

        <Link to="/IT-support/assigned-tickets"><button className='btn'>view my Tickets</button></Link>

        <h1>Open IT support requests:</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Room</th>
              {/* <th>Date</th> */}
              <th>Time</th>
              {/* <th>Exam Period</th> */}
              <th>Service</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>{ticketRows}</tbody>
        </table>
      </div>
      {/* <Link to="/IT-support/assigned-tickets"><button className='btn'>view my Tickets</button></Link> */}

    </div>
  );
}

export default OpenTicketsITsupportPage;
