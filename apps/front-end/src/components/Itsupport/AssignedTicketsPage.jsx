import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ITtickets.css';
import HeaderIT from '../HeaderIT';



function ITsupportPage() {
  // Mock data for IT support tickets
  const ITSupportTicketData = [
    {
      id: 1,
      room: 'Room A',
      date: '2023-05-21',
      time: '10:00 AM',
      examPeriod: 'Morning',
      service: 'Service 1',
      state: 'In progress'
    },
    {
      id: 2,
      room: 'Room B',
      date: '2023-05-21',
      time: '2:00 PM',
      examPeriod: 'Afternoon',
      service: 'Service 2',
      state: 'Closed',
    },
    // Add more IT support ticket data here...
  ];

  const [examRoomData, setExamRoomData] = useState([]);
  const token = localStorage.getItem('auth');

  const url = `http://localhost:4000/support/My-ticket`;
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
          console.log(examRoomData);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, [token]);

  // Map over the IT support ticket data and create a table row for each ticket
  const ticketRows = examRoomData.map((ticket) => ( //will be examRoomData.map
    <tr key={ticket.id}>

      {/* <td>
        <Link to={`/CloseTicket/${ticket.id}`}>View Ticket</Link>
      </td> */}

      <td>
        {ticket.status === 'In progress' ? (
          <Link to={`/closeTicket/${ticket.id}`}>View Ticket</Link>
        ) : (
          <span></span>
        )}
      </td>

      <td>{ticket.room}</td>
      <td>{ticket.date}</td>
      <td>{ticket.time}</td>
      <td>{ticket.examPeriod}</td>
      <td>{ticket.service}</td>
      <td>{ticket.state}</td>
    </tr>
  ));

  return (
    <div>
      <HeaderIT />

      <div className='ITsupportPage-container'>

        <Link to="../IT-support/open-tickets"><button className='btn'>view Open Tickets</button></Link>

        <h1>IT support tickets assigned to me:</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Room</th>
              <th>Date</th>
              <th>Time</th>
              <th>Exam Period</th>
              <th>Service</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>{ticketRows}</tbody>
        </table>
      </div>
      {/* <Link to="/IT-support/open-tickets"><button className='btn'>view Open Tickets</button></Link> */}
    </div>
  );
}

export default ITsupportPage;
