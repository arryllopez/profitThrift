"use client";

import React, { useState } from "react";
import axios from "axios";

const Scanner = ({ onScan }) => {
  const [barcode, setBarcode] = useState("No barcode scanned yet");

  const handleScan = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/scan"); // Call Flask API
      setBarcode(response.data.barcode);
      onScan(response.data.barcode); // Send data to parent component
    } catch (error) {
      console.error("Error scanning barcode:", error);
      setBarcode("Error scanning barcode");
    }
  };

  return (
    <div>
      <h2>Scan Barcode</h2>
      <button onClick={handleScan} className="bg-blue-500 text-white py-2 px-4 rounded">
        Scan Item
      </button>
      <p>Scanned Barcode: {barcode}</p>
    </div>
  );
};

export default Scanner;
