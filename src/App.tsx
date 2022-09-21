import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ProgressBar } from 'react-bootstrap';
import DateTime from './DateTime';
import Coins from './Coins';
import EmptyJar from './assets/EmptyJar.png';
import './App.css';

function App() {

  const [hours, setHours] = useState(0);
  const [wages, setWages] = useState(0);
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
    <div className="App">
      <header className="App-header">
        <h1>Money Tracker</h1>
      </header>
      <body>
        <div className="container-fluid row">
          <div className="left-side col">
            <a href="https://www.vecteezy.com/free-vector/3d">3d coin Vectors by Vecteezy</a>
            <Coins coinType="gold" seconds={0} />
            <img id="jar" src={EmptyJar} alt="an empty jar"/>
            <DateTime displayDate={true} displayTime={true}/>
          </div>
          <div className="right-side col">
            <div className="form-container">
              <form className="col">
                <div className="form-group row">
                  <label className="col-2" >Hours</label>
                  <input type="number" name="hours" className="form-control col" onChange={e => setHours(Number(e.target.value))} />
                </div>
                <div className="form-group row">
                  <label className="col-2">Wages</label>
                  <input type="number" name="wages" className="form-control col" onChange={e => setWages(Number(e.target.value))} />
                </div>
              </form>
            </div>
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
                ${(seconds * (wages / 3600)).toFixed(2)}
              </div>
              <div className="progressBar">
                <ProgressBar striped variant="success" now={(seconds / (hours * 3600)) * 100} />
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
