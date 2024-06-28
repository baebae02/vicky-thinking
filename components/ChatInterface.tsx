import React, { useState } from 'react';
import { ChatMessage } from '../app/types';
import Image from 'next/image';

interface ChatInterfaceProps {
  chatHistory: ChatMessage[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ chatHistory, setChatHistory }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setChatHistory(prev => [...prev, { type: 'user', content: input }]);

    const aiResponse = await simulateAIResponse(input);
    setChatHistory(prev => [...prev, { type: 'ai', content: aiResponse }]);

    setInput('');
  };

  const simulateAIResponse = async (userInput: string): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return `AI response to: "${userInput}"`;
  };

  return (
    <div className="flex flex-col">
      <div className="flex-grow overflow-y-auto mb-4">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.type === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex min-w-96 gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="상황을 입력하세요!"
          className="flex-grow border rounded-lg p-3 text-sm custom-placeholder"
          style={{color: '#5C5E66'}}
        />
        <button type="submit" className="bg-pink-300 w-12 h-12 p-2 rounded-lg">
          <Image 
              src="/send.png" 
              alt="send" 
              width={40} 
              height={40} 
              className="w-6 h-6 ml-1" 
            />
        </button>
      </form>
      {/* <footer className="p-4">
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
          주변에 공유하기
        </button>
      </footer> */}
    </div>
  );
};

export default ChatInterface;