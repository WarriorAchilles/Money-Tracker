import React, { useState } from 'react';
import Timer from './Timer';
import DateTime from './DateTime';
import './App.css';

function App() {

  const [hours, setHours] = useState(0);
  const [wages, setWages] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Money Tracker</h1>
      </header>
      <body>
        <div className="container row">
          <div className="left-side col">
          jar of money goes here
          <DateTime displayDate={true} displayTime={true}/>
          </div>
          <div className="right-side col container">
            <div className="row">
              <form className="col">
                <div className="form-group">
                  <label>Hours</label>
                  <input type="number" name="hours" className="form-control" onChange={e => setHours(Number(e.target.value))} />
                </div>
                <div className="form-group">
                  <label>Wages</label>
                  <input type="number" name="wages" className="form-control" onChange={e => setWages(Number(e.target.value))} />
                </div>
              </form>
            </div>
            <Timer hours={hours} wages={wages} />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
