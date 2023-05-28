import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminExamsPage.css';
import HeaderAdmin from "../HeaderAdmin";
import axios from 'axios';

function AdminExamsPage() {
  const [examRoomData, setExamRoomData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('auth');

  useEffect(() => {
    setIsLoading(true);

    fetch('http://localhost:4000/admin/Exams', {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        'Content-Type': 'application/json'
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [token]);

  useEffect(() => {
    setRooms(examRoomData);
  }, [examRoomData]);

  const [rooms, setRooms] = useState([]);
  const [selectedInvigilator, setSelectedInvigilator] = useState('');

  const handleInvigilatorChange = (roomId, newInvigilator) => {
    const updatedRooms = rooms.map((room) => {
      if (room.id === roomId) {
        axios.post('http://localhost:4000/admin/Exams', {
          oldInvigilator: room.invigilator, // the name of the old invigilator
          examTime: room.time, // the exam time
          newInvigilator: newInvigilator // the name of the new invigilator
        }, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            'Content-Type': 'application/json'
          }
        })
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
            onChange={(e) => handleInvigilatorChange(room.id, e.target.value)}
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
          {isLoading ? (
            <p>Loading...</p>
          ) : (
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
          )}
        </main>
      </div>
    </div>
  );
}

export default AdminExamsPage;
