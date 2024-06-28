'use client';

import React, { useState } from 'react';

const TerminalInput = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // 여기에 입력값을 처리하는 로직을 추가할 수 있습니다.
    console.log('입력된 상황:', input);
    setInput('');
  };

  return (
    <div className="terminal">
      <p className="prompt">당신의 상황을 입력해주세요:</p>
      <form onSubmit={handleSubmit}>
        <div className="input-line">
          <span className="arrow">&#62;</span>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="terminal-input"
            autoFocus
          />
        </div>
      </form>
      <style jsx>{`
        .terminal {
          background-color: #000;
          border-radius: 5px;
          padding: 20px;
          font-family: monospace;
          color: #00ff00;
          width: 100%;
          max-width: 600px;
        }
        .prompt {
          margin-bottom: 10px;
        }
        .input-line {
          display: flex;
          align-items: center;
        }
        .arrow {
          margin-right: 10px;
        }
        .terminal-input {
          background-color: transparent;
          border: none;
          color: #00ff00;
          font-family: inherit;
          font-size: 1em;
          width: 100%;
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default TerminalInput;