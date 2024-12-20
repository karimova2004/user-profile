import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running && time > 0) {
      interval = setInterval(() => setTime((prev) => prev - 1), 1000);
    } else if (time === 0 && running) {
      setRunning(false);
      alert('Time is up!');
    }
    return () => clearInterval(interval);
  }, [running, time]);

  const incrementTime = (amount) => setTime((prev) => Math.max(0, prev + amount)); 
  const decrementTime = (amount) => setTime((prev) => Math.max(0, prev - amount)); 
  const resetTime = () => {
    setTime(0);
    setRunning(false); 
  };

  return (
    <div className="timer">
      <h2>Timer</h2>
      <div className="time-display">
        <span>{Math.floor(time / 3600).toString().padStart(2, '0')}:</span>
        <span>{Math.floor((time % 3600) / 60).toString().padStart(2, '0')}:</span>
        <span>{(time % 60).toString().padStart(2, '0')}</span>
      </div>
      {running ? (
        <button onClick={() => setRunning(false)}>Pause</button>
      ) : (
        <>
          <div className="controls">
            <button onClick={() => incrementTime(3600)}>+1 Hour</button>
            <button onClick={() => incrementTime(60)}>+1 Minute</button>
            <button onClick={() => incrementTime(1)}>+1 Second</button>

            <button onClick={() => decrementTime(3600)} disabled={time < 3600}>
              -1 Hour
            </button>
            <button onClick={() => decrementTime(60)} disabled={time < 60}>
              -1 Minute
            </button>
            <button onClick={() => decrementTime(1)} disabled={time < 1}>
              -1 Second
            </button>
          </div>
          <button onClick={() => setRunning(true)}>Start</button>
          <button onClick={resetTime}>Reset</button>
        </>
      )}
    </div>
  );
};

export default Timer;
