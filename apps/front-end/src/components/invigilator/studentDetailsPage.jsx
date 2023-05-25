import React, { useState } from 'react';
import './studentDetailsPage.css';
import HeaderAdmin from '../HeaderAdmin';
import HeaderNonAdmin from '../HeaderNonAdmin';
import { Link } from 'react-router-dom';

const StudentDetailsPage = () => {
  const studentData = [
    {
      seat: 1,
      studentName: 'HANI GHASSAN DARWICHEH',
      studentID: 's190155298',
      courseName: 'Data mining and warehousing',
      courseCode: 'IT446',
      CRN: '41882',
      examTime: '3:30 PM - 5:30 PM',
      roomNumber: '105',
    },
    {
      seat: 2,
      studentName: 'Abdullah Mohammed Zain Abdulrahman',
      studentID: 's190053445',
      courseName: 'Enterprise Systems',
      courseCode: 'IT342',
      CRN: '10301',
      examTime: '6:00 PM - 8:00 PM',
      roomNumber: '117',
    },
    // Add more student data here...
  ];

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
    // Perform actions with the submitted text input value, e.g., send it to the server
    console.log('Submitted text:', textInputValue);

    // Reset the state
    setShowTextInput(false);
    setTextInputValue('');
  };

  // Retrieve user role from state or authentication context, whether it is admin or non-admin, and store it in a variable to be used in the conditional rendering below
  const userRole = 'non-admin';

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
                    <td>{studentData[0]?.studentName}</td>
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
                    <td>{studentData[0]?.studentID}</td>
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
                    <td>{studentData[0]?.courseName}</td>
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
                    <td>{studentData[0]?.courseCode}</td>
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
                    <td>{studentData[0]?.CRN}</td>
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
                    <td>{studentData[0]?.examTime}</td>
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
                    <td>{studentData[0]?.roomNumber}</td>
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
