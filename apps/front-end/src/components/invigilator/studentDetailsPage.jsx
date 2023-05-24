import React from 'react';
import './studentDetailsPage.css';
import HeaderAdmin from '../HeaderAdmin';
import HeaderNonAdmin from '../HeaderNonAdmin';

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

  
   // Retrieve user role from state or authentication context, whether it is admin or non-admin, and store it in a variable to be used in the conditional rendering below
   const userRole = 'non-admin';

   return (
     <div>
       {userRole === 'admin' ? <HeaderAdmin /> : <HeaderNonAdmin />}
 
 
    <div className="student-details-page">
      <div className="buttons">
        <button className="btn">Student Exam Password</button>
        <button className="btn">Report Violation</button>
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
    </div>
  );
};

export default StudentDetailsPage;
