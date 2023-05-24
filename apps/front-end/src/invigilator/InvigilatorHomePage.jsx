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


  //  WORK IN PROGRESS ...
  /** 
    fetch('http://localhost:4000/invigilator/home')
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data 
        console.log(`this is what we got:`);
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.log('Error:', error);
      });
  
      fetch('http://localhost:4000/invigilator/home', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',  },
        body: JSON.stringify({
          'id': 2,
          'Hi': 'Hello 2'
        }),
      })
        .then((response) => response.text())
        .then(setGreeting);
  */

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
