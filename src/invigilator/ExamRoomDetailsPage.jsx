import React from "react";
import { useParams } from "react-router-dom";
import "./ExamRoomDetailsPage.css";

function ExamRoom() {
  const { studentId } = useParams();
  const students = [
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
    // Add more static student data here... this is temporary data, later we will fetch it from the server
  ];

  return (
    <div className="exam-room-container">
      <h1 className="room-number">Room 105</h1>
      
      <div className="buttons">
        <button className="btn">Grant Exam Access</button>
        <button className="btn">Take Attendance</button>
        <button className="btn">Request IT Support</button>
      </div>
      
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
              <td><a href={`/student-details/${student.id}`}>{student.name}</a></td>
              <td>{student.course}</td>
              <td>{student.seat}</td>
              <td>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExamRoom;
