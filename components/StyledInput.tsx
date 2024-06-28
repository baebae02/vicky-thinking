'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

const StyledInput = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('입력된 상황:', input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md space-x-2">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="상황을 입력하세요"
        className="flex-grow p-2 text-gray-600 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <Send size={24} color="white" />
      </button>
    </form>
  );
};

export default StyledInput;