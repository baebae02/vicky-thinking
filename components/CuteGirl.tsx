'use client';
import React from 'react';

const CuteGirl = () => {
  return (
    <div className="girl">
      <div className="head">
        <div className="eye eye-left"></div>
        <div className="eye eye-right"></div>
        <div className="mouth"></div>
        <div className="blush blush-left"></div>
        <div className="blush blush-right"></div>
      </div>
      <div className="body"></div>
      <div className="arm arm-left">
        <div className="hand hand-left"></div>
      </div>
      <div className="arm arm-right">
        <div className="hand hand-right"></div>
      </div>
      <style jsx>{`
        .girl {
          width: 100px;
          height: 150px;
          position: relative;
        }
        .head {
          width: 80px;
          height: 80px;
          background-color: #ffdbac;
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 10px;
        }
        .body {
          width: 60px;
          height: 80px;
          background-color: #ff69b4;
          position: absolute;
          bottom: 0;
          left: 20px;
          border-radius: 50% 50% 0 0;
        }
        .eye {
          width: 10px;
          height: 10px;
          background-color: #000;
          border-radius: 50%;
          position: absolute;
          top: 30px;
        }
        .eye-left {
          left: 25px;
        }
        .eye-right {
          right: 25px;
        }
        .mouth {
          width: 20px;
          height: 10px;
          border-radius: 0 0 10px 10px;
          border: 2px solid #000;
          border-top: none;
          position: absolute;
          bottom: 20px;
          left: 30px;
        }
        .arm {
          width: 20px;
          height: 60px;
          background-color: #ffdbac;
          position: absolute;
          top: 90px;
        }
        .arm-left {
          left: 5px;
          transform-origin: top;
          transform: rotate(-60deg);
        }
        .arm-right {
          right: 5px;
          transform-origin: top;
          transform: rotate(60deg);
        }
        .hand {
          width: 15px;
          height: 15px;
          background-color: #ffdbac;
          border-radius: 50%;
          position: absolute;
        }
        .hand-left {
          top: 25px;
          left: -5px;
          animation: touchCheek 3s infinite;
        }
        .hand-right {
          top: 25px;
          right: -5px;
          animation: touchCheek 3s infinite 1.5s;
        }
        .blush {
          width: 15px;
          height: 7px;
          background-color: #ffb3ba;
          border-radius: 50%;
          position: absolute;
          top: 40px;
        }
        .blush-left {
          left: 15px;
        }
        .blush-right {
          right: 15px;
        }
        @keyframes touchCheek {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default CuteGirl;