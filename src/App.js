import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';
import InvigilatorHomePage from './invigilator/InvigilatorHomePage';
import ExamRoomDetailsPage from './invigilator/ExamRoomDetailsPage';
//import StudentDetailsPage from './invigilator/StudentDetailsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/Invigilator-home" element={<InvigilatorHomePage />} />
          <Route exact path="/exam-room-details" element={<ExamRoomDetailsPage />} />
          <Route path="/exam-room/:roomId" element={<ExamRoomDetailsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

