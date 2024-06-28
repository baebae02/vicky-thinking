'use client';

import React, { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import Image from 'next/image';
import { ko } from 'date-fns/locale';

const formatDistanceToNowKR = (date: Date): string => {
  const d = date;
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000; // 현재 시간과의 차이(초)
  if (diff < 60 * 1) { // 1분 미만일땐 방금 전 표기
    return "방금 전";
  }
  
  if (diff < 60 * 60 * 24 * 3) { // 3일 미만일땐 시간차이 출력(몇시간 전, 몇일 전)
    return formatDistanceToNow(d, { addSuffix: true, locale: ko });
  }

  return format(d, 'PPP EEE p', { locale: ko }); // 날짜 포맷
};

const HistoryInterface = () => {
  const [messages, setMessages] = useState([
    { id: 1, user_message: "친구와의 약속을 깜빡했어..", created_at: "2024-06-28T12:00:00", bot_response: "친구와의 약속을 깜빡했네? 덕분에 집에서 쉴 수 있어! 완전 럭키비키잖아?"},
    { id: 2, user_message: "친구와의 약속을 깜빡했어..", bot_response: "친구와의 약속을 깜빡했네? 덕분에 집에서 쉴 수 있어! 완전 럭키비키잖아?", created_at: "2024-06-28T12:02:00"},
    { id: 3, user_message: "친구와의 약속을 깜빡했어..", bot_response: "친구와의 약속을 깜빡했네? 덕분에 집에서 쉴 수 있어! 완전 럭키비키잖아?", created_at: "2024-06-28T12:04:00"},
    { id: 4, user_message: "친구와의 약속을 깜빡했어..", bot_response: "친구와의 약속을 깜빡했네? 덕분에 집에서 쉴 수 있어! 완전 럭키비키잖아?", created_at: "2024-06-28T12:06:00"},
  ]);

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, user_message: input, bot_response: input, created_at: new Date().toISOString() }]);
      setInput('');
      // Here you would typically call an API to get the AI response
      // For this example, we'll just add a mock response after a short delay
      setTimeout(() => {
        setMessages(msgs => [...msgs, { id: msgs.length + 1, user_message: "", bot_response: "이것도 럭키비키네! 어떻게 생각해?", created_at: new Date().toISOString() }]);
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-2xl h-5/6 overflow-y-scroll pb-2">
      <div className="space-y-2">
        {messages.map((message) => (
          <div key={message.id}>
            <div className={'text-sm mt-2 flex justify-start'}>
              <div className={'max-w-md text-gray-500'}>
                {message.user_message}
              </div>
            </div>
            <div className={'text-sm mt-2 flex justify-end'}>
              <Image 
              src="/enter.png" 
              alt="enter" 
              width={16} 
              height={16} 
              className="w-4 h-4 mr-2" 
            />
            <div className={'max-w-md bg-pink-100 text-gray-500 mb-4 p-3 rounded-lg shadow-md'}>
              {message.bot_response}
                <div className="text-xs text-gray-400 mt-1">
                {formatDistanceToNowKR(new Date(message.created_at))}
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryInterface;