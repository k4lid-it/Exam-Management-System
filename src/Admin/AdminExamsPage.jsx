import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import examRoomData from '../invigilator/examRoomData';
import './AdminExamsPage.css';

function AdminExamsPage() {
  const [rooms, setRooms] = useState(examRoomData);

  const handleInvigilatorChange = (roomId, newInvigilator) => {
    const updatedRooms = rooms.map((room) => {
      if (room.id === roomId) {
        return {
          ...room,
          invigilator: newInvigilator
        };
      }
      return room;
    });
    setRooms(updatedRooms);
  };

  const roomRows = rooms.map((room) => (
    <tr key={room.id}>
      <td><Link to={`/exam-room/${room.id}`}>{room.room}</Link></td>
      <td>{room.date}</td>
      <td>{room.time}</td>
      <td>
        {room.invigilator}{' '}
        <button className="changeInvigilatorButton" onClick={() => handleInvigilatorChange(room.id, 'New Invigilator')}>
          Change Invigilator
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="overWhiteBox">
      <div className="whiteBox">
        <div className="AdminExamsPage">
        <Link to="/Admin-home">
          <button>Home</button>
        </Link>
          <main>
            <table className="">
              <thead>
                <tr>
                  <th>Room</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Invigilator</th>
                </tr>
              </thead>
              <tbody>
                {roomRows}
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminExamsPage;
