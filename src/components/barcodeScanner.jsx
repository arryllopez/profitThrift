"use client";

import React, { useState } from "react";
import { BarcodeScanner }  from "react-barcode-scanner";

const BarcodeScannerComponent = () => {
  const [data, setData] = useState("No barcode scanned yet");

  const handleScan = (result) => {
    if (result) {
      setData(result);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <h2>React Barcode Scanner</h2>
      <BarcodeScanner
        onUpdate={(err, result) => {
          if (result) handleScan(result);
          if (err) handleError(err);
        }}
      />
      <p>Scanned Code: {data}</p>
    </div>
  );
};

export default BarcodeScannerComponent;
