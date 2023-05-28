import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ITtickets.css';
import HeaderIT from '../HeaderIT';
import { io } from 'socket.io-client';

function OpenTicketsITsupportPage() {
  const [examRoomData, setExamRoomData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem('auth');
  const url = 'http://localhost:4000/support/Home';

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.message === 'Unauthorized') {
          window.location.href = '../security-stop';
        } else {
          setExamRoomData(data);
        }
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token]);

  useEffect(() => {
    const socket = io('http://localhost:4000');

    const handleNewTicket = () => {
      fetchData();
    };

    socket.on('ticketNew', handleNewTicket);

    return () => {
      socket.off('ticketNew', handleNewTicket);
    };
  }, [token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const ticketRows = examRoomData.map((ticket) => (
    <tr key={ticket.id}>
      <td>
        <Link
          to={`/accept-ticket/${ticket.id}`}
          onClick={() => sessionStorage.setItem('ticketID', ticket.id)}
        >
          View Ticket
        </Link>
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
        <Link to='/IT-support/assigned-tickets'>
          <button className='btn'>View My Tickets</button>
        </Link>
        <h1>Open IT Support Requests:</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Room</th>
              <th>Time</th>
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
