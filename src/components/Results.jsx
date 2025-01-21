import React from ' react;'


export default function Results() {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Results</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Item Name Placeholder</h3>
          <p className="text-gray-600 mb-4">Barcode: 123456789</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">eBay Price: $XX.XX</span>
            <a
              href="#"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              View on eBay
            </a>
          </div>
        </div>
      </div>
    )
  }