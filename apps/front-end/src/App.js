import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';
import InvigilatorHomePage from './invigilator/InvigilatorHomePage';
import ExamRoomDetailsPage from './invigilator/ExamRoomDetailsPage';
//import StudentDetailsPage from './invigilator/StudentDetailsPage';
import AdminHomePage from './Admin/AdminHomePage';
import AdminExamsPage from './Admin/AdminExamsPage';
import Acceptticket from './Itsupport/Acceptticket';
import Closeticket from './Itsupport/Closeticket';
import Tickets from './Itsupport/Tickets';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDetailsPage from './invigilator/studentDetailsPage';
import QRcodeScannerPage from './invigilator/QRcodeScannerPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/Invigilator-home" element={<InvigilatorHomePage />} />
          <Route exact path="/exam-room-details" element={<ExamRoomDetailsPage />} />
          <Route exact path="/exam-room/:roomId" element={<ExamRoomDetailsPage />} />
          <Route exact path="/Admin-home" element={<AdminHomePage />} />
          <Route exact path="/AdminExamsPage" element={<AdminExamsPage />} />
          <Route exact path="/Accept-ticket" element={<Acceptticket />} />
          <Route exact path="/Close-ticket" element={<Closeticket />} />
          <Route exact path="/Tickets" element={<Tickets />} />
          <Route exact path="/Login" element={<LoginPage />} />
          <Route exact path="/student-details" element={<StudentDetailsPage />} />
          <Route exact path="/student-details/:studentId" element={<StudentDetailsPage />} />
          <Route exact path="/QR-code-scanner" element={<QRcodeScannerPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

