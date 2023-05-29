import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import './mockExam.css';
import '../components/Login/LoginPage.css';
import { io } from 'socket.io-client';


export default function QRCodeGeneratorStudent1() {
  const [studentData, setStudentData] = useState({ id: '', name: '' });
  const [qrCodeValue, setQRCodeValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const socket = io('http://localhost:4000');



  useEffect(() => {
    // Simulating the fetching of student data from the backend
    fetchStudentData().then((data) => {
      setStudentData(data);
      generateQRCode(data);
    });
  }, []);

  const fetchStudentData = async () => {
    // Simulating the API call to fetch student data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ header: '2x', id: 'S190155298', name: 'Hani Ghassan Darwicheh' });
      }, 1000);
    });
  };

  const generateQRCode = (data) => {
    const qrCodeValue = `${data.header}${data.id},${data.name}`;
    setQRCodeValue(qrCodeValue);
  };

  const openExam = () => {
    sessionStorage.setItem('openExam', "open");
    window.location.href = `/mock-exam/student/1/submit`;
  }
  socket.on(`S190155298,Hani Ghassan Darwicheh`, openExam)
  return (
    <div>
      <h2>Please ask your Invigilator to scan your QR code to gain exam access:</h2>
      <h1>Student: {studentData.name}</h1>
      <QRCode
        value={qrCodeValue}
        //   value='seu.edu.sa'
        size={390}
      />

      {/* <div className="input-button">
        <input type="text" value={textValue} placeholder="Enter Password" />
        <button>Submit</button>
      </div> */}


    </div>
  );
}
