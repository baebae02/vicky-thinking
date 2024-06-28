import type { NextPage } from 'next';
import Head from 'next/head';
import ChatInterface from '../components/ChatInterface';
import Sidebar from '../components/Sidebar';
import { ChatMessage } from '../app/types';
import React, { useState, useEffect } from 'react';

const Home: NextPage = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [sidebarHistory, setSidebarHistory] = useState<string[]>([]);

  useEffect(() => {
    if (chatHistory.length > 0 && chatHistory.length % 2 === 0) {
      setSidebarHistory(prev => [...prev, chatHistory[chatHistory.length - 2].content]);
    }
  }, [chatHistory]);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>원영적 사고 AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow flex">
        <div className="flex-grow p-6 flex flex-col items-center justify-center bg-pink-100">
          <h1 className="text-5xl font-bold mb-2 text-center color-pink-300">원영적 사고 AI</h1>
          <p className="mb-6 text-center font-medium text-2xl" style={{color: '#5C5E66'}}>이거 완전 럭키 비키잖아🍀</p>
          <ChatInterface chatHistory={chatHistory} setChatHistory={setChatHistory} />
          <hr className="min-w-96 border-t border-gray-300 border-solid my-2" />
          <div className="min-w-96 min-h-32 flex justify-center items-center rounded-md bg-pink-000">
            <p className="text-sm text-gray-600 text-center">원영적 사고를 거친 답변이 이곳에 나타나요! 😺</p>
          </div>
        </div>
        <Sidebar history={sidebarHistory} />
      </main>
    </div>
  );
};

export default Home;