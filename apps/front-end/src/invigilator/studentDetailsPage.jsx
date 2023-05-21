import React from 'react';
import './studentDetailsPage.css';

const StudentDetailsPage = () => {
  const studentData = [
    {
      studentName: 'Abdullah Mohammed Zain Abdulrahman',
      studentID: 's190155298',
      courseName: 'Data mining and warehousing',
      courseCode: 'IT446',
      CRN: '41882',
      examTime: '9:00 AM - 11:00 AM',
      roomNumber: '105',
    },
    // Add more student data here...
  ];

  return (
    <div className="student-details-page">
      <div className="buttons">
        <button className="button">Student Exam Password</button>
        <button className="button">Write note</button>
      </div>
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
  );
};

export default StudentDetailsPage;
