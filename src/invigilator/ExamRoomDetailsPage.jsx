import React from "react";
import { useParams } from "react-router-dom";
import ExamRoomDetails from "./ExamRoomDetails";
import "./ExamRoomDetailsPage.css";

function ExamRoom() {

  return (
    <div className="exam-room-container">
      <h1 className="room-number">Room 105</h1>
      
          <button className="btn">Grant Exam Access</button>
          <button className="btn">Take Attendance</button>
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
          
        <tr className="student-row">
              <td>1</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr> 
            
            <tr className="student-row">
              <td>2</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>3</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>4</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>5</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>6</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>7</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>8</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>9</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>10</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>11</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>12</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>13</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>14</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>15</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>16</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>17</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>18</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>19</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>20</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>21</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>22</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>23</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>

            <tr className="student-row">
              <td>24</td>
              <td><a href="/student-details/1">student name</a></td>
              <td>course</td>
              <td>seat</td>
              <td>status</td>
            </tr>
          
        </tbody>
      </table>
    </div>
  );
}

export default ExamRoom;
