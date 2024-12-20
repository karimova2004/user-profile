import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">
      <h2>Clock</h2>
      <div className="time-display">
        <span>{time.getHours().toString().padStart(2, '0')}:</span>
        <span>{time.getMinutes().toString().padStart(2, '0')}:</span>
        <span>{time.getSeconds().toString().padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default Clock;
