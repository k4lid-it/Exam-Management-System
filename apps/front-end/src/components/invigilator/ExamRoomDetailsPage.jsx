import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ExamRoomDetailsPage.css";
import HeaderNonAdmin from "../HeaderNonAdmin";
import HeaderAdmin from "../HeaderAdmin";


function ExamRoom() {
  // const { studentId } = useParams();
  const students = [
  ];


  const [switchState, setSwitchState] = useState(students.map(() => false));
  const [examRoomData, setExamRoomData] = useState([]);

  // const handleSwitchToggle = (index) => {
  //   const confirmed = window.confirm("Are you sure?");
  //   if (confirmed) {
  //     const newSwitchState = [...switchState];
  //     newSwitchState[index] = !newSwitchState[index];
  //     setSwitchState(newSwitchState);
  //   }
  // };

  const token = localStorage.getItem('auth');

  const room = sessionStorage.getItem('selectedRoom');
  const time = sessionStorage.getItem('selectedTime')


  const url = `http://localhost:4000/invigilator/Room?room=${room}&time=${time}`;
  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Unauthorized") { window.location.href = "../security-stop"; }
        else { setExamRoomData(data); }
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, [token]);

  const handleSwitchToggle = (index) => {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) {
      const newSwitchState = [...switchState];
      newSwitchState[index] = !newSwitchState[index];
      setSwitchState(newSwitchState);
    } else {
      const checkbox = document.getElementById(`checkbox-${index}`);
      checkbox.checked = !checkbox.checked;
    }
  };






  // Retrieve user role from state or authentication context, whether it is admin or non-admin, and store it in a variable to be used in the conditional rendering below
  const userRole = 'non-admin';

  return (
    <div>
      <style>
        {`
          @media print {
            .btn {
              display: none;
            }
            .header-items {
              display: none;
            }
            .room-number {
              color: black;
            }
            a:link { text-decoration: none; }
            a {
              color: black;
              font-weight: bold;
            }
          }
        `}
      </style>
      {userRole === 'admin' ? <HeaderAdmin /> : <HeaderNonAdmin />}

      <div className="exam-room-container">
        <h1 className="room-number">Room {room}</h1>

        <Link to="../QR-code-scanner">
          <button className="btn">Grant Exam Access</button>
        </Link>
        <Link to="../QR-code-scanner">
          <button className="btn">Take Attendance</button>
        </Link>
        <Link to="/request-it-support">
          <button className="btn">Request IT Support</button>
        </Link>

        <button onClick={window.print} className="btn">Print this page</button>

        <table className="students-table">
          <thead>
            <tr>
              <th>Seat</th>
              <th>Name</th>
              <th>Course</th>
              <th>College</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {examRoomData.map((student, index) => (
              <tr className="student-row" key={index}>
                <td>{student.seat}</td>
                <td id="stdname">
                  <a href={`/student-details/${student.seat}`}
                    onClick={() => {
                      sessionStorage.setItem('selectedStudent', student.name);
                      sessionStorage.setItem('selectedSubject', student.subject)
                    }}>{student.name}</a>
                </td>
                <td>{student.subject}</td>
                <td>{student.college}</td>
                <td>
                  <input
                    id={`checkbox-${index}`}
                    type="checkbox"
                    className={`status-checkbox ${switchState[index] ? "checked" : ""}`}
                    onChange={() => handleSwitchToggle(index)}
                  />

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div >
  );
}

export default ExamRoom;