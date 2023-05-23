import React from 'react';
import { Link } from 'react-router-dom';
import examRoomData from './examRoomData'; // import the exam room data
import './InvigilatorHomePage.css'; // import the CSS file for this page
import HeaderNonAdmin from "../HeaderNonAdmin";
import HeaderAdmin from "../HeaderAdmin";

function InvigilatorHomePage() {
  // map over the exam room data and create a table row for each room
  const roomRows = examRoomData.map((room) => (
    <tr key={room.id}>
      <td><Link to={`/exam-room/${room.id}`}>{room.room}</Link></td>
      <td>{room.date}</td>
      <td>{room.time}</td>
    </tr>
  ));

   // Retrieve user role from state or authentication context, whether it is admin or non-admin, and store it in a variable to be used in the conditional rendering below
   const userRole = 'non-admin';

   return (
     <div>
       {userRole === 'admin' ? <HeaderAdmin /> : <HeaderNonAdmin />}
 
 
    
      <div className="InvigilatorHomePage">


      {/* main content with table of exam rooms */}
      <main>
        <h1 className='invigilation-duties'>Invigilation duties:</h1>
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
   </div>
  );
}

export default InvigilatorHomePage;
