import { useState, useEffect } from 'react';

export default function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`INR ${hours}:${minutes}:${seconds} GMT +5:30`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent h-14 flex items-center px-8 justify-between">
      <div className="flex items-center gap-3">
        <span className="inline-block w-3 h-3 rounded-sm bg-white mr-2"></span>
        <span className="font-mono text-xs tracking-widest text-white hidden md:inline">
          {time}
        </span>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <a
          href="/"
          className="text-white text-lg md:text-2xl font-light tracking-widest"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.15em' }}
        >
          CRACOE
        </a>
      </div>
      <div className="ml-auto">
        <button
          onClick={onMenuClick}
          className="uppercase text-white text-sm tracking-widest font-semibold cursor-pointer hover:text-[#667EEA] transition-colors"
        >
          MENU
        </button>
      </div>
    </div>
  );
}