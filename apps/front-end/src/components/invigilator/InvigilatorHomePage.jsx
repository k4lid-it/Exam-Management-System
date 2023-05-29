import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import examRoomData from './examRoomData'; // import the exam room data
import './InvigilatorHomePage.css'; // import the CSS file for this page
import HeaderNonAdmin from "../HeaderNonAdmin";
import HeaderAdmin from "../HeaderAdmin";


function InvigilatorHomePage() {

  // Retrieve user role from state or authentication context, whether it is admin or non-admin, and store it in a variable to be used in the conditional rendering below
  const userRole = 'non-admin';


  const [examRoomData, setExamRoomData] = useState([]);

  // This token will be taken from the login. 
  const token = localStorage.getItem('auth');

  // console.log("THE TOKEN: " + token);

  useEffect(() => {
    fetch('https://examportalseuserver.herokuapp.com/invigilator/home', {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data.message);
        if (data.message === "Unauthorized") { window.location.href = "../security-stop"; }
        else { setExamRoomData(data); }
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, [token]);


  // map over the exam room data and create a table row for each room
  const roomRows = examRoomData.map((room) => (
    <tr key={room.id}>
      <td>
        <Link to={`/exam-room/${room.id}`}
          onClick={() => {
            sessionStorage.setItem('selectedRoom', room.room,);
            sessionStorage.setItem('selectedTime', room.time);
          }}
        >
          {room.room}

        </Link>
      </td>
      <td>{room.date}</td>
      <td className={`time-${room.id}`}>{room.time}</td>
    </tr>
  ));



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
