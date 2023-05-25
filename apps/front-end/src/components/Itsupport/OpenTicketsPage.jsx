import React from 'react';
import { Link } from 'react-router-dom';
import './ITtickets.css';
import HeaderNonAdmin from '../HeaderNonAdmin';

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
    // Add more IT support ticket data here...
  ];

  // Map over the IT support ticket data and create a table row for each ticket
  const ticketRows = ITSupportTicketData.map((ticket) => (
    <tr key={ticket.id}>
      <td>
        <Link to={`/accept-ticket/${ticket.id}`}>View Ticket</Link>
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
    <HeaderNonAdmin />

    <div className='ITsupportPage-container'>
      <h1>Open IT support requests:</h1>
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
    </div>
  );
}

export default OpenTicketsITsupportPage;
