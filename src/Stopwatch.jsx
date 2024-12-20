import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const resetStopwatch = () => setTime(0);

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <div className="time-display">
        <span>{Math.floor(time / 3600).toString().padStart(2, '0')}:</span>
        <span>{Math.floor((time % 3600) / 60).toString().padStart(2, '0')}:</span>
        <span>{(time % 60).toString().padStart(2, '0')}</span>
      </div>
      <button onClick={() => setRunning(!running)}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={resetStopwatch} disabled={running}>Reset</button>
    </div>
  );
};

export default Stopwatch;
