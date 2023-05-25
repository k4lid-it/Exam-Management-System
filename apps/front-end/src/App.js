import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login/LoginPage';
import InvigilatorHomePage from './components/invigilator/InvigilatorHomePage';
import ExamRoomDetailsPage from './components/invigilator/ExamRoomDetailsPage';
import StudentDetailsPage from './components/invigilator/studentDetailsPage';
import QRcodeScannerPage from './components/invigilator/QRcodeScannerPage';
import AdminHomePage from './components/Admin/AdminHomePage';
import AdminExamsPage from './components/Admin/AdminExamsPage';
import Acceptticket from './components/Itsupport/Acceptticket';
import Closeticket from './components/Itsupport/Closeticket';
import TicketsPage from './components/Itsupport/TicketsPage';
import HeaderAdmin from './components/HeaderAdmin';
import nonAdminHeader from './components/HeaderNonAdmin';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import RequestITsupportPage from './components/invigilator/RequestITsupportPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
          <Route exact path="/Accept-ticket" element={<Acceptticket />} />
          {/* <Route exact path="/CloseTicket" element={<Closeticket />} /> */}
          <Route exact path="/CloseTicket/:ticketID" element={<Closeticket />} />

          <Route exact path="/IT-Support/Tickets" element={<TicketsPage />} />
          <Route exact path="/Login" element={<LoginPage />} />
          {/* <Route exact path="/student-details" element={<StudentDetailsPage />} /> */}
          <Route exact path="/student-details/:seat" element={<StudentDetailsPage />} />
          <Route exact path="/QR-code-scanner" element={<QRcodeScannerPage />} />
          <Route exact path="/Request-IT-support" element={<RequestITsupportPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;

