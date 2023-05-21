import React from 'react';
import { Link } from 'react-router-dom';
import examRoomData from './examRoomData'; // import the exam room data
import './InvigilatorHomePage.css'; // import the CSS file for this page

function InvigilatorHomePage() {
  // map over the exam room data and create a table row for each room
  const roomRows = examRoomData.map((room) => (
    <tr key={room.id}>
      <td><Link to={`/exam-room/${room.id}`}>{room.room}</Link></td>
      <td>{room.date}</td>
      <td>{room.time}</td>
    </tr>
  ));

  return (
    
      <div className="InvigilatorHomePage">
      {/* header with welcome message and user name */}
      <header>
        <h1 className='welcome'>Welcome, Ehsan Ahmad</h1>
      </header>

      {/* main content with table of exam rooms */}
      <main>
        <h2 className='invigilation-duties'>Invigilation duties:</h2>
        <table>
          <thead>
            <tr>
              <th>Room</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {roomRows}
          </tbody>
        </table>
      </main>
    </div>
  
  );
}

export default InvigilatorHomePage;
