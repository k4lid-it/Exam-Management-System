import React, { useState, useEffect } from 'react';
import QrScanner from 'react-qr-scanner';
import './QrcodeAdmin.css';
import HeaderAdmin from "../HeaderAdmin";
import HeaderNonAdmin from "../HeaderNonAdmin";
import { io } from 'socket.io-client';
import axios from "axios";

const QRCodeScannerPage = () => {
    const [result, setResult] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const socket = io('http://localhost:4000');

    useEffect(() => {
        // Check if the user is on a mobile device
        const isMobileDevice = /Mobi/i.test(navigator.userAgent);
        setIsMobile(isMobileDevice);
    }, []);



    const handleScan = (data) => {
        if (data) {
            const jsonString = JSON.stringify(data);
            const parsedData = JSON.parse(jsonString);
            const token = localStorage.getItem('auth');


            const header = parsedData.text.substring(0, 2);
            const body = parsedData.text.substring(2);
            console.log(header);
            console.log(body);

            // Taking attendace. 
            if (header === '1x') {
                axios.post('http://localhost:4000/admin/check-room', {
                    studentID: body,
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        console.log(response);
                        setResult(response.data.message);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
            //Granting exam access
            if (header === '2x') {
                setResult("The admin can't grant access to exam, please refer to the invigilator.");

            }
            //Generating password
            if (header === '3x') {
                setResult("The admin can't Generate password, please refer to the invigilator.");
            }


            setShowPopup(true);
        }
    };

    const handleError = (error) => {
        console.error(error);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    // Retrieve user role from state or authentication context, whether it is admin or non-admin, and store it in a variable to be used in the conditional rendering below
    const userRole = 'non-admin';

    return (
        <div>
            {userRole === 'admin' ? <HeaderAdmin /> : <HeaderNonAdmin />}

            <div className="qrcode-scanner-page">
                <div className="qrcode-scanner-container">
                    <h1 className="qrcode-scanner-title">Scan QR Code</h1>
                    {!showPopup && ( // Conditionally render the QR scanner if showPopup is false
                        <div className="qrcode-scanner">
                            <QrScanner
                                delay={300}
                                onError={handleError}
                                onScan={handleScan}
                                facingMode={isMobile ? 'environment' : 'user'}
                                style={{ width: '100%' }}
                            />
                        </div>
                    )}

                    {showPopup && (
                        <div className="qrcode-popup">
                            <div className="qrcode-popup-content">
                                <h2>Result:</h2>
                                <p>{result}</p>
                                <button onClick={closePopup}>Close</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QRCodeScannerPage;
