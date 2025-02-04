"use client";

import React, { useRef, useEffect } from "react";

const Camera = ({ onCapture }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            videoRef.current.srcObject = stream;
        });
    }, []);

    return <video ref={videoRef} autoPlay />;
};

export default Camera;
