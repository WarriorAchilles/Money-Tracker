import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval : ReturnType<typeof setInterval>;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds])

  return (
    <div>
      <div className="timer">
      {Math.floor(seconds / 3600).toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping: false})}
      :{(Math.floor(seconds / 60) % 60).toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping: false})}
      :{(seconds % 60).toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping: false})}
    </div>
      <div>
        <button className="btn btn-primary mx-1" onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="btn btn-secondary" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;