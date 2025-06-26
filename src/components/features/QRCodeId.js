// src/components/features/QRCodeId.js

import React, { useState } from 'react';
// CORRECT: Use a named import for QRCodeSVG
import { QRCodeSVG } from 'qrcode.react'; 
// For scanning, you'd typically use a library like 'react-qr-scanner'
// import QrScanner from 'react-qr-scanner';

const QRCodeId = ({ isScanner = false, userId = 'staff-12345' }) => {
  const [scanResult, setScanResult] = useState('No result');

  const handleScan = data => {
    if (data) {
      setScanResult(data.text);
      // Here you would trigger login logic
      alert(`Scanned ID: ${data.text}`);
    }
  };

  const handleError = err => console.error(err);

  // Generator View
  if (!isScanner) {
    return (
      <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Your Digital ID</h3>
        <div className="p-4 bg-white border rounded-lg">
          {/* CORRECT: Use the QRCodeSVG component */}
          <QRCodeSVG value={JSON.stringify({ id: userId, type: 'staff' })} size={200} />
        </div>
        <p className="mt-4 text-gray-600">Show this QR code for check-in or access.</p>
      </div>
    );
  }

  // Scanner View
  return (
    <div className="flex flex-col items-center p-6">
      <h3 className="text-xl font-semibold mb-4">Scan Staff ID</h3>
      <div className="w-64 h-64 bg-gray-300 rounded-lg flex items-center justify-center">
        {/* Placeholder for QR Scanner Component */}
        {/* <QrScanner delay={300} onError={handleError} onScan={handleScan} style={{ width: '100%' }} /> */}
        <p className="text-gray-500 text-center">QR Scanner would be active here.</p>
      </div>
      <p className="mt-4">Last Scanned: <span className="font-mono">{scanResult}</span></p>
    </div>
  );
};

export default QRCodeId;