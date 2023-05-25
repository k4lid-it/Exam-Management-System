import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ExamRoomDetailsPage.css";
import HeaderNonAdmin from "../HeaderNonAdmin";
import HeaderAdmin from "../HeaderAdmin";


function ExamRoom() {
  // const { studentId } = useParams();
  const students = [
    // Static student data
    // { seat: 1, name: "HANI GHASSAN DARWICHEH", course: "IT446", College: "CCI", Attendance: "Present" },
    // { seat: 2, name: "Abdullah Mohammed Zain Abdulrahman", course: "IT342", College: "CCI", Attendance: "Absent" },
    // { seat: 3, name: "HANI GHASSAN DARWICHEH", course: "IT446", College: "CCI", status: "Present" },
    // { seat: 4, name: "Abdullah Mohammed Zain Abdulrahman", course: "IT342", College: "CCI", status: "Absent" },
    // { seat: 5, name: "HANI GHASSAN DARWICHEH", course: "IT446", College: "CCI", status: "Present" },
    // { seat: 6, name: "Abdullah Mohammed Zain Abdulrahman", course: "IT342", College: "CCI", status: "Absent" },
    // { seat: 7, name: "HANI GHASSAN DARWICHEH", course: "IT446", College: "CCI", status: "Present" },
    // { seat: 8, name: "Abdullah Mohammed Zain Abdulrahman", course: "IT342", College: "CCI", status: "Absent" },
    // { seat: 9, name: "HANI GHASSAN DARWICHEH", course: "IT446", College: "CCI", status: "Present" },
    // { seat: 10, name: "Abdullah Mohammed Zain Abdulrahman", course: "IT342", College: "CCI", status: "Absent" },
    // { seat: 11, name: "HANI GHASSAN DARWICHEH", course: "IT446", College: "CCI", status: "Present" },
    // { seat: 12, name: "Abdullah Mohammed Zain Abdulrahman", course: "IT342", College: "CCI", status: "Absent" },
    // { seat: 13, name: "HANI GHASSAN DARWICHEH", course: "IT446", College: "CCI", status: "Present" },
    // { seat: 14, name: "Abdullah Mohammed Zain Abdulrahman", course: "IT342", College: "CCI", status: "Absent" },
    // { seat: 15, name: "HANI GHASSAN DARWICHEH", course: "IT446", College: "CCI", status: "Present" },
    // { seat: 16, name: "Abdullah Mohammed Zain Abdulrahman", course: "IT342", College: "CCI", status: "Absent" },
    // { seat: 17, name: "HANI GHASSAN DARWICHEH", course: "IT446", College: "CCI", status: "Present" },
    // { seat: 18, name: "Abdullah Mohammed Zain Abdulrahman", course: "IT342", College: "CCI", status: "Absent" },
    // { seat: 19, name: "HANI GHASSAN DARWICHEH", course: "IT446", College: "CCI", status: "Present" },
    // { seat: 20, name: "Abdullah Mohammed Zain Abdulrahman", course: "IT342", College: "CCI", status: "Absent" },
    // { seat: 21, name: "HANI GHASSAN DARWICHEH", course: "IT446", College: "CCI", status: "Present" },
    // { seat: 22, name: "Abdullah Mohammed Zain Abdulrahman", course: "IT342", College: "CCI", status: "Absent" },
    // { seat: 23, name: "HANI GHASSAN DARWICHEH", course: "IT446", College: "CCI", status: "Present" },
    // { seat: 24, name: "Abdullah Mohammed Zain Abdulrahman", course: "IT342", College: "CCI", status: "Absent" },

    //this is temporary data, later we will fetch it from the server
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
  console.log(url);
  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        'Content-Type': 'application/json',
        // "room": "111"
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
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
        <button className="btn">Request IT Support</button>

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
                  <a href={`/student-details/${student.seat}`}>{student.name}</a>
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