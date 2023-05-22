import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ExamRoomDetailsPage.css";
import HeaderNonAdmin from "../HeaderNonAdmin";
import HeaderAdmin from "../HeaderAdmin";


function ExamRoom() {
  const { studentId } = useParams();
  const students = [
    // Static student data
    { id: 1, name: "John Doe", course: "Math", seat: "A1", status: "Present" },
    { id: 2, name: "Jane Smith", course: "Science", seat: "B2", status: "Absent" },
    { id: 3, name: "John Doe", course: "Math", seat: "A1", status: "Present" },
    { id: 4, name: "Jane Smith", course: "Science", seat: "B2", status: "Absent" },
    { id: 5, name: "John Doe", course: "Math", seat: "A1", status: "Present" },
    { id: 6, name: "Jane Smith", course: "Science", seat: "B2", status: "Absent" },
    { id: 7, name: "John Doe", course: "Math", seat: "A1", status: "Present" },
    { id: 8, name: "Jane Smith", course: "Science", seat: "B2", status: "Absent" },
    { id: 9, name: "John Doe", course: "Math", seat: "A1", status: "Present" },
    { id: 10, name: "Jane Smith", course: "Science", seat: "B2", status: "Absent" },
    { id: 11, name: "John Doe", course: "Math", seat: "A1", status: "Present" },
    { id: 12, name: "Jane Smith", course: "Science", seat: "B2", status: "Absent" },
    { id: 13, name: "John Doe", course: "Math", seat: "A1", status: "Present" },
    { id: 14, name: "Jane Smith", course: "Science", seat: "B2", status: "Absent" },
    { id: 15, name: "John Doe", course: "Math", seat: "A1", status: "Present" },
    { id: 16, name: "Jane Smith", course: "Science", seat: "B2", status: "Absent" },
    { id: 17, name: "John Doe", course: "Math", seat: "A1", status: "Present" },
    { id: 18, name: "Jane Smith", course: "Science", seat: "B2", status: "Absent" },
    { id: 19, name: "John Doe", course: "Math", seat: "A1", status: "Present" },
    { id: 20, name: "Jane Smith", course: "Science", seat: "B2", status: "Absent" },
    { id: 21, name: "John Doe", course: "Math", seat: "A1", status: "Present" },
    { id: 22, name: "Jane Smith", course: "Science", seat: "B2", status: "Absent" },
    { id: 23, name: "John Doe", course: "Math", seat: "A1", status: "Present" },
    { id: 24, name: "Jane Smith", course: "Science", seat: "B2", status: "Absent" },
    //this is temporary data, later we will fetch it from the server
  ];

  // Retrieve user role from state or authentication context, whether it is admin or non-admin, and store it in a variable to be used in the conditional rendering below
  const userRole = 'non-admin';

  return (
    <div>
      {userRole === 'admin' ? <HeaderAdmin /> : <HeaderNonAdmin />}

      <div className="exam-room-container">
        <h1 className="room-number">Room 105</h1>

        <Link to="../QR-code-scanner">
          <button className="btn">Grant Exam Access</button>
        </Link>
        <Link to="../QR-code-scanner">
          <button className="btn">Take Attendance</button>
        </Link>
        <button className="btn">Request IT Support</button>

        <table className="students-table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Course</th>
              <th>Seat</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr className="student-row" key={index}>
                <td>{index + 1}</td>
                <td>
                  <a href={`/student-details/${student.id}`}>{student.name}</a>
                </td>
                <td>{student.course}</td>
                <td>{student.seat}</td>
                <td>{student.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExamRoom;