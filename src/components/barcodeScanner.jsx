"use client";

import React, { useState } from 'react';
import { BarcodeScanner } from 'react-barcode-scanner'; // Correct import
import "react-barcode-scanner/polyfill"; // Polyfill for camera handling

const BarcodeScannerComponent = () => {
  const [scannedData, setScannedData] = useState("No barcode scanned yet"); // State to hold scanned data

  // Handle scanning result
  const handleScan = (result) => {
    if (result) {
      setScannedData(result.text); // Update state with scanned barcode data
    }
  };

  // Handle any errors during scanning
  const handleError = (error) => {
    console.error("Error scanning barcode: ", error);
  };

  return (
    <div>
      <h2>Scan Barcode</h2>
      {/* BarcodeScanner component */}
      <BarcodeScanner
        onUpdate={(err, result) => {
          if (result) handleScan(result);  // If there's a result, handle it
          if (err) handleError(err);  // If there's an error, handle it
        }}
      />
      {/* Display scanned data */}
      <p>Scanned Data: {scannedData}</p>
    </div>
  );
};

export default BarcodeScannerComponent;
