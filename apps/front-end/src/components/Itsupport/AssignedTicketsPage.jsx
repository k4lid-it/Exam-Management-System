import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ITtickets.css';
import HeaderIT from '../HeaderIT';

function ITsupportPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [examRoomData, setExamRoomData] = useState([]);
  const token = localStorage.getItem('auth');
  const url = `https://examportalseuserver.herokuapp.com/support/My-ticket`;

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
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });
  }, [token]);

  // Map over the IT support ticket data and create a table row for each ticket
  const ticketRows = examRoomData.map((ticket) => (
    <tr key={ticket.id}>
      <td>
        {ticket.status === 'In progress' ? (
          <Link
            to={`/closeTicket/${ticket.id}`}
            onClick={() => sessionStorage.setItem('ticketID', ticket.id)}
          >View Ticket</Link>
        ) : (
          <span></span>
        )}
      </td>
      <td>{ticket.room}</td>
      <td>{ticket.time}</td>
      <td>{ticket.type}</td>
      <td>{ticket.status}</td>
    </tr>
  ));

  return (
    <div>
      <HeaderIT />
      <div className='ITsupportPage-container'>
        <Link to="../IT-support/open-tickets">
          <button className='btn'>View Open Tickets</button>
        </Link>
        <h1>IT support tickets assigned to me:</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Room</th>
                <th>Time</th>
                <th>Service</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{ticketRows}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ITsupportPage;
