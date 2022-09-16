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
        {seconds}s
      </div>
      <div>
        <button className="btn btn-primary" onClick={toggle}>
          {isActive ? 'Take break' : 'Start'}
        </button>
        <button className="btn btn-secondary" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;