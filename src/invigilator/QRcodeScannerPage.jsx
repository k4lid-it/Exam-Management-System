import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import './QRcodeScannerPage.css';

const QRCodeScannerPage = () => {
  const [result, setResult] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      setShowPopup(true);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="qrcode-scanner-page">
      <div className="qrcode-scanner-container">
        <h1 className="qrcode-scanner-title">Scan the student's QR Code</h1>
        {!showPopup && ( // Conditionally render the QR scanner if showPopup is false
          <div className="qrcode-scanner">
            <QrScanner
              delay={300}
              onError={handleError}
              onScan={handleScan}
              facingMode="environment"
              style={{ width: '100%' }}
            />
          </div>
        )}

        {showPopup && (
          <div className="qrcode-popup">
            <div className="qrcode-popup-content">
              <h2>Result:</h2>
              <p>{result && result.text}</p>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeScannerPage;
