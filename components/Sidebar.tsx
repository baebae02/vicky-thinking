import React from 'react';
import HistoryInterface from './HistoryInterface';
import Image from 'next/image';

interface SidebarProps {
  history: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ history }) => {
  return (
    <div className="w-80 bg-white p-4 overflow-y-auto flex flex-col justify-between max-h-screen">
      <h2 className="font-bold text-2xl text-black">실시간 원영적 사고 😝</h2>
      <HistoryInterface />
      {history.map((item, index) => (
        <div key={index} className="mb-4">
          <p className="text-sm text-gray-600">{item}</p>
          <p className="text-xs text-gray-400">{8 + index}분 전</p>
        </div>
      ))}
      <footer className="">
        <button className="flex justify-between w-full bg-pink-300 text-white p-4 rounded-lg">
          주변에 공유하기
          <Image
            src="/arrow.png"
            alt="arrow"
            width={24}
            height={24}
            className="w-6 h-6 ml-1"
          />
        </button>
      </footer>
    </div>
  );
};

export default Sidebar;