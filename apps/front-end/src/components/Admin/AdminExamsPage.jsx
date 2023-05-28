import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import examRoomData from '../invigilator/examRoomData';
import './AdminExamsPage.css';
import HeaderAdmin from "../HeaderAdmin";

function AdminExamsPage() {
  const [rooms, setRooms] = useState(examRoomData);
  const [selectedInvigilator, setSelectedInvigilator] = useState('');

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
    setSelectedInvigilator('');
  };

  const invigilatorOptions = ['Abdulbasit Banga', 'Abdullah Albarakati', 'Ehsan Ahmed', 'Hamdan Alzahrani', 'Radhouane Guermazi'];

  const roomRows = rooms.map((room) => (
    <tr key={room.id}>
      <td><Link to={`/exam-room/${room.id}`}>{room.room}</Link></td>
      <td>{room.date}</td>
      <td>{room.time}</td>
      <td>{room.invigilator}</td>
      <td>
        {selectedInvigilator === room.id ? (
          <select
            value={selectedInvigilator}
            onChange={(e) => setSelectedInvigilator(e.target.value)}
          >
            <option value="">Select Invigilator</option>
            {invigilatorOptions.map((invigilator) => (
              <option key={invigilator} value={invigilator}>{invigilator}</option>
            ))}
          </select>
        ) : (
          <button
            className="changeInvigilatorButton"
            onClick={() => setSelectedInvigilator(room.id)}
          >
            Change Invigilator
          </button>
        )}
      </td>
    </tr>
  ));

  return (
    <div>
      <HeaderAdmin />
      <div className="Admin-exams-page">
        <main>
          <table className="tttable">
            <thead>
              <tr>
                <th>Room</th>
                <th>Date</th>
                <th>Time</th>
                <th>Invigilator</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {roomRows}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default AdminExamsPage;
