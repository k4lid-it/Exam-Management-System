import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login/LoginPage';
import LogoutSuccessful from './components/LogoutSuccess';
import InvigilatorHomePage from './components/invigilator/InvigilatorHomePage';
import ExamRoomDetailsPage from './components/invigilator/ExamRoomDetailsPage';
import StudentDetailsPage from './components/invigilator/studentDetailsPage';
import QRcodeScannerPage from './components/invigilator/QRcodeScannerPage';
import AdminHomePage from './components/Admin/AdminHomePage';
import AdminExamsPage from './components/Admin/AdminExamsPage';
import AdminTicketsPage from './components/Admin/AdminTicketsPage';
import AdminMyTicketsPage from './components/Admin/AdminMyTicketsPage';
import Acceptticket from './components/Itsupport/Acceptticket';
import Closeticket from './components/Itsupport/Closeticket';
import AssignedTicketsPage from './components/Itsupport/AssignedTicketsPage';
import OpenTicketsITsupportPage from './components/Itsupport/OpenTicketsPage';
import HeaderAdmin from './components/HeaderAdmin';
import nonAdminHeader from './components/HeaderNonAdmin';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import RequestITsupportPage from './components/invigilator/RequestITsupportPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotAllowed from './components/Unauthorized';

import QRCodeGeneratorStudent1 from './MockExam/studentExamPage1';
import QRCodeGeneratorStudent2 from './MockExam/studentExamPage2';
import QRCodeGeneratorStudent1submit from './MockExam/mockExamSubmit1';
import QRCodeGeneratorStudent2submit from './MockExam/mockExamSubmit2';
import QRCodeGeneratorExamSubmitted from './MockExam/mockExamSubmitted';
import AcceptAdminTicket from './components/Admin/AcceptAdminTicket'
import CloseAdminTicket from './components/Admin/CloseAdminTicket'
import QrcodeAdmin from "./components/Admin/QRcodeAdmin"


function App() {
  return (
    <Router>
      {/* <AdminHeader /> */}
      <div className="App">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/Invigilator-home" element={<InvigilatorHomePage />} />
          <Route exact path="/exam-room-details" element={<ExamRoomDetailsPage />} />
          <Route exact path="/exam-room/:roomID" element={<ExamRoomDetailsPage />} />
          <Route exact path="/Admin-home" element={<AdminHomePage />} />
          <Route exact path="/AdminExamsPage" element={<AdminExamsPage />} />
          <Route exact path="/Admin/Tickets" element={<AdminTicketsPage />} />
          <Route exact path="/Admin/Assigned-Tickets" element={<AdminMyTicketsPage />} />
          <Route exact path="/Admin/Qr-code" element={<QrcodeAdmin />} />
          <Route exact path="/Admin/CloseTicket/:ticketID" element={< CloseAdminTicket />} />
          <Route exact path="/Admin/Accept-ticket/:ticketID" element={<AcceptAdminTicket />} />
          <Route exact path="/Accept-ticket" element={<Acceptticket />} />
          <Route exact path="/Accept-ticket/:ticketID" element={<Acceptticket />} />
          {/* <Route exact path="/CloseTicket" element={<Closeticket />} /> */}
          <Route exact path="/CloseTicket/:ticketID" element={<Closeticket />} />
          <Route exact path="/IT-Support/Open-Tickets" element={<OpenTicketsITsupportPage />} />
          <Route exact path="/IT-Support/Assigned-Tickets" element={<AssignedTicketsPage />} />
          <Route exact path="/Login" element={<LoginPage />} />
          {/* <Route exact path="/student-details" element={<StudentDetailsPage />} /> */}
          <Route exact path="/student-details/:studentSEAT" element={<StudentDetailsPage />} />
          <Route exact path="/QR-code-scanner" element={<QRcodeScannerPage />} />
          <Route path="/security-stop" element={<NotAllowed />} />
          <Route exact path="/Request-IT-support" element={<RequestITsupportPage />} />

          <Route exact path="/mock-exam/student/1" element={<QRCodeGeneratorStudent1 />} />
          <Route exact path="/mock-exam/student/2" element={<QRCodeGeneratorStudent2 />} />
          <Route exact path="/mock-exam/student/1/submit" element={<QRCodeGeneratorStudent1submit />} />
          <Route exact path="/mock-exam/student/2/submit" element={<QRCodeGeneratorStudent2submit />} />
          <Route exact path="/mock-exam/student/submitted" element={<QRCodeGeneratorExamSubmitted />} />

          <Route exact path="/a5c00e90148cf48945c6c7601a66cce838134c02d6d52ca186ed1051a04d725cdd5d9f49bd856804cbea496b0ce31d51d5b1899b1c1d527b79e1388936ff22aa" element={<LogoutSuccessful />} />


        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;

