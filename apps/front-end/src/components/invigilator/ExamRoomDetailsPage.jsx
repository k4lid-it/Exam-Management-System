import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ExamRoomDetailsPage.css";
import HeaderNonAdmin from "../HeaderNonAdmin";
import HeaderAdmin from "../HeaderAdmin";
import axios from 'axios';
import io from 'socket.io-client';


function ExamRoom() {
  // const { studentId } = useParams();
  const students = [
  ];



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


  const url = `https://examportalseuserver.herokuapp.com/invigilator/Room?room=${room}&time=${time}`;
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

  const seats = () => {
    const seatNumbers = examRoomData.map((item) => item.seat);
    sessionStorage.setItem('seatNumbers', JSON.stringify(seatNumbers));
  }


  const handleSwitchToggle = async (index, boolean) => {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) {

      const selectedStudent = examRoomData[index];
      const { name, subject } = selectedStudent;
      if (!boolean)
        // Checkbox is checked, mark the student as Present
        await axios.post(
          "https://examportalseuserver.herokuapp.com/invigilator/Room",
          {
            name: name,
            subject: subject,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
      else {
        // Checkbox is unchecked, mark the student as Absent
        await axios.post(
          "https://examportalseuserver.herokuapp.com/invigilator/Room/absent",
          {
            name: name,
            subject: subject,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

    } else {
      const checkbox = document.getElementById(`checkbox-${index}`);
      checkbox.checked = !checkbox.checked;
    }
  };


  //------------------------------------------


  useEffect(() => {

    const socket = io('https://examportalseuserver.herokuapp.com');


    // Add event listener for "submission" event
    socket.on('submission', () => {
      window.location.reload();
    });

    // Clean up the Socket.IO connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);


  // Retrieve user role from state or authentication context, whether it is admin or non-admin, and store it in a variable to be used in the conditional rendering below
  const userRole = 'non-admin';
  // console.log(examRoomData);


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
        <Link to="/request-it-support"
          onClick={seats()}
        >
          <button className="btn">Request IT Support</button>
        </Link>

        <button onClick={window.print} className="btn">Export Attendance Report</button>

        <table className="students-table">
          <thead>
            <tr>
              <th>Seat</th>
              <th>Name</th>
              <th>Course</th>
              <th>College</th>
              <th>Attendance</th>
              <th>Exam submitted?</th>
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
                      sessionStorage.setItem('selectedSubject', student.subject);
                      sessionStorage.setItem('selectedID', student.studentID);
                    }}>{student.name}</a>
                </td>
                <td>{student.subject}</td>
                <td>{student.college}</td>
                <td>
                  <input
                    id={`checkbox-${index}`}
                    type="checkbox"
                    className={`status-checkbox ${index}`}
                    defaultChecked={student.attendance === "Present"} // Set the checked attribute based on the switchState
                    onChange={() => handleSwitchToggle(index, student.attendance === "Present")}
                  />

                </td>

                {/* @Khaled do you magic in the below <td>, it should display yes or no to indicate whether the submit button in the mock exam was clicked (and hence sent post request) or not */}
                <td id={`submit ${student.studentID}`}>
                  {student.submitted}
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