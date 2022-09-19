import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval : ReturnType<typeof setInterval>;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 59) {
          setSeconds(0);
          if (minutes === 59) {
            setMinutes(0);
            setHours(hours => hours + 1)
          } else {
            setMinutes(minutes => minutes + 1);
          }
        } else {
          setSeconds(seconds => seconds + 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, hours])

  return (
    <div>
      <div className="timer">
          {hours.toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping: false})}:{minutes.toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping: false})}:{seconds.toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping: false})}
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