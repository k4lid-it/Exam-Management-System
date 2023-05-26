import React from 'react';
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

  // Map over the IT support ticket data and create a table row for each ticket
  const ticketRows = ITSupportTicketData.map((ticket) => (
    <tr key={ticket.id}>
      <td>
      {ticket.state === 'In progress' ? (
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
    <HeaderAdmin />

    <div className='ITsupportPage-container'>

    <Link to="/admin/tickets"><button className='btn'>view All Tickets</button></Link>

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
