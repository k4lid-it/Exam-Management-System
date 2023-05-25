import React from 'react';
import { Link } from 'react-router-dom';
import './ITtickets.css';
import HeaderNonAdmin from '../HeaderNonAdmin';

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
    },
    {
      id: 2,
      room: 'Room B',
      date: '2023-05-21',
      time: '2:00 PM',
      examPeriod: 'Afternoon',
      service: 'Service 2',
    },
    // Add more IT support ticket data here...
  ];

  // Map over the IT support ticket data and create a table row for each ticket
  const ticketRows = ITSupportTicketData.map((ticket) => (
    <tr key={ticket.id}>
      <td>
        <Link to={`/CloseTicket/${ticket.id}`}>View Ticket</Link>
      </td>
      <td>{ticket.room}</td>
      <td>{ticket.date}</td>
      <td>{ticket.time}</td>
      <td>{ticket.examPeriod}</td>
      <td>{ticket.service}</td>
    </tr>
  ));

  return (
    <div>
    <HeaderNonAdmin />

    <div className='ITsupportPage-container'>
      <h1>My assigned IT support tickets:</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Room</th>
            <th>Date</th>
            <th>Time</th>
            <th>Exam Period</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>{ticketRows}</tbody>
      </table>
    </div>
    </div>
  );
}

export default ITsupportPage;
