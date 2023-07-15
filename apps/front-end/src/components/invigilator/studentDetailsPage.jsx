import React, { useState, useEffect } from 'react';
import './studentDetailsPage.css';
import HeaderAdmin from '../HeaderAdmin';
import HeaderNonAdmin from '../HeaderNonAdmin';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StudentDetailsPage = () => {

  const [showTextInput, setShowTextInput] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');


  const handleReportViolation = () => {
    setShowTextInput(true);
  };

  const handleTextInputChange = (event) => {
    setTextInputValue(event.target.value);
  };

  const handleCancel = () => {
    setShowTextInput(false);
    setTextInputValue('');
  };

  const handleSubmit = () => {
    axios.post('http://localhost:4000/invigilator/student-details', {

      studentID: sessionStorage.getItem("selectedID"),
      subject: sessionStorage.getItem("selectedSubject"),
      report: textInputValue

    },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
    console.log('Submitted text:', textInputValue, sessionStorage.getItem("selectedStudent"));

    // Reset the state
    setShowTextInput(false);
    setTextInputValue('');
  };

  // Retrieve user role from state or authentication context, whether it is admin or non-admin, and store it in a variable to be used in the conditional rendering below
  const userRole = 'non-admin';

  const [examRoomData, setExamRoomData] = useState([]);

  const token = localStorage.getItem('auth');

  const url = `http://localhost:4000/invigilator/student-details?studentName=${sessionStorage.getItem("selectedStudent")}&subject=${sessionStorage.getItem("selectedSubject")}`;

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Unauthorized") { window.location.href = "../security-stop"; }
        else {
          setExamRoomData(data);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, [token]);

  return (
    <div>
      {userRole === 'admin' ? <HeaderAdmin /> : <HeaderNonAdmin />}

      <div className="student-details-page">
        <div className="buttons">
          <Link to="/QR-code-scanner">
            <button className="btn">Generate Exam Password</button>
          </Link>
          <button className="btn" onClick={handleReportViolation}>
            Report Violation
          </button>
        </div>

        {showTextInput && (
          <div className="text-input-container">
            <input
              type="text"
              value={textInputValue}
              onChange={handleTextInputChange}
              placeholder="Enter your report on this student and describe the violation..."
            />
            <div className="buttons">
              <button className="btn" onClick={handleCancel}>
                Cancel
              </button>
              <button className="btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        )}

        <table className="details-table">
          <tbody>
            <tr>
              <td>Student Name:</td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>{examRoomData.name}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>Student ID:</td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>{examRoomData.studentID}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>Course Name:</td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>{examRoomData.course}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>Course Code:</td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>{examRoomData.subject}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>CRN:</td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>{examRoomData.CRN}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>Exam Time:</td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>{examRoomData.time}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>Room Number:</td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>{examRoomData.room}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDetailsPage;
