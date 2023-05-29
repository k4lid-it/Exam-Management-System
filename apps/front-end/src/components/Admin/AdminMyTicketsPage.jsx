import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Itsupport/ITtickets.css';
import HeaderAdmin from '../HeaderAdmin';

function AdminMyTickets() {
  // Mock data for IT support tickets
  const ITSupportTicketData = [
    {
      id: 1,
      room: 'Room A',
      date: '2023-05-21',
      time: '10:00 AM',
      examPeriod: 'Morning',
      service: 'Service 1',
      state: 'closed',
    },
    {
      id: 2,
      room: 'Room B',
      date: '2023-05-21',
      time: '2:00 PM',
      examPeriod: 'Afternoon',
      service: 'Service 2',
      state: 'In progress',
    },
    // Add more IT support ticket data here...
  ];
  const [examRoomData, setExamRoomData] = useState([]);
  const token = localStorage.getItem('auth');


  useEffect(() => {
    fetch('https://examportalseuserver.herokuapp.com/admin/My-ticket', {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data.message);
        if (data.message === "Unauthorized") { window.location.href = "../security-stop"; }
        else { setExamRoomData(data); }
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, [token]);

  // Map over the IT support ticket data and create a table row for each ticket
  const ticketRows = Array.isArray(examRoomData) ? examRoomData.map((ticket) => (
    <tr key={ticket.id}>
      <td>
        {ticket.status === 'In progress' ? (
          <Link to={`/Admin/CloseTicket/${ticket.id}`}
            onClick={() => { sessionStorage.setItem('ticketID', ticket.id) }}
          >View Ticket</Link>
        ) : (
          <span></span>
        )}
      </td>
      <td>{ticket.room}</td>
      {/* <td>{ticket.date}</td> */}
      <td>{ticket.time}</td>
      {/* <td>{ticket.examPeriod}</td> */}
      <td>{ticket.type}</td>
      <td>{ticket.status}</td>
    </tr>
  )) : [];

  return (
    <div>
      <HeaderAdmin />

      <div className='ITsupportPage-container'>

        <Link to="/admin/tickets"><button className='btn'>view All Tickets</button></Link>

        <h1>IT support tickets assigned to me:</h1>
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
      {/* <Link to="/IT-support/open-tickets"><button className='btn'>view Open Tickets</button></Link> */}
    </div>
  );
}

export default AdminMyTickets;
