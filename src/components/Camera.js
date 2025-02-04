"use client";

import React from "react";

const Camera = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Live Camera Feed</h2>
      <img
        src="http://127.0.0.1:5000/video_feed"
        alt="Live Camera"
        className="rounded-lg shadow-md"
      />
    </div>
  );
};

export default Camera;
