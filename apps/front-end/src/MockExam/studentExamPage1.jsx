import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import './mockExam.css';
import '../components/Login/LoginPage.css';

export default function QRCodeGeneratorStudent1() {
  const [studentData, setStudentData] = useState({ id: '', name: '' });
  const [qrCodeValue, setQRCodeValue] = useState('');
  const [textValue, setTextValue] = useState('');


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
        resolve({ id: 's190155298', name: 'Hani Ghassan Darwicheh' });
      }, 1000);
    });
  };

  const generateQRCode = (data) => {
    const qrCodeValue = `${data.id},${data.name}`;
    setQRCodeValue(qrCodeValue);
  };
  

  return (
    <div>
      <h2>Please ask your Invigilator to scan your QR code to gain exam access:</h2>
      <h1>Student: {studentData.name}</h1>
      <QRCode 
      value={qrCodeValue}
    //   value='seu.edu.sa'
      size={390}
      />

<div className="input-button">
        <input type="text" value={textValue} placeholder="Enter Password" />
        <button>Submit</button>
      </div>


    </div>
  );
}
