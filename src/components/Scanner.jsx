import React from 'react';

export default function Scanner() {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Scan Barcode</h2>
        <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
          <p className="text-gray-600">Camera viewfinder placeholder</p>
        </div>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
          Scan Item
        </button>
      </div>
    )
  }