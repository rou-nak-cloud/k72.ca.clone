import React, { useEffect, useState } from 'react';

const LocalTime = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        // timeZone: 'Asia/Kolkata',
          timeZone: 'America/Toronto', // 🇨🇦 Canada (Eastern Time)
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const currentTime = new Date().toLocaleTimeString('en-CA', options);
      setTime(currentTime);
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000); // update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-3xl font-medium text-white">
    {time} <span className="text-gray-200">🇨🇦</span>
    </div>
  );
};

export default LocalTime;
