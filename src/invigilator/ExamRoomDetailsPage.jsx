import React from "react";
import { useParams } from "react-router-dom";
import ExamRoomDetails from "./ExamRoomDetails";

function ExamRoom() {
  /* the below two lines are commented out because they are producing errors */
  const { roomId } = useParams(); // get the room ID from the URL parameter
  const examRoom = ExamRoomDetails.find((room) => room.id === roomId); // find the exam room data based on the room ID

  return (
    <div className="exam-room-container">
      <h1 className="room-number">{examRoom.number}</h1>
      <div className="exam-room-actions">
        <button className="grant-exam-access-btn">Grant Exam Access</button>
        <button className="take-attendance-btn">Take Attendance</button>
        <button className="request-it-support-btn">Request IT Support</button>
      </div>
      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Seat</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {examRoom.students.map((student) => (
            <tr key={student.id} className="student-row">
              <td>{student.name}</td>
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
