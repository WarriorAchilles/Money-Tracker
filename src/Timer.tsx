import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ProgressBar } from 'react-bootstrap';
import './Timer.css';

interface propTypes {
  hours: number,
  wages: number,
}

const Timer = (props: propTypes) => {
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
    <div className="timer-container row">
      <div className="timer">
        {Math.floor(seconds / 3600).toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping: false})}
          :{(Math.floor(seconds / 60) % 60).toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping: false})}
          :{(seconds % 60).toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping: false})}
      </div>
      <div className="buttonRow">
        <button className="btn btn-success mx-1" onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="btn btn-secondary" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="money">
        ${(seconds * (props.wages / 3600)).toFixed(2)}
      </div>
      <div className="progressBar">
        <ProgressBar striped variant="success" now={(seconds / (props.hours * 3600)) * 100} />
      </div>
    </div>
  );
};

export default Timer;