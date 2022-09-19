import React, { FormEvent, useState } from 'react';
import './App.css';
import Timer from './Timer';
import DateTime from './DateTime';

function App() {

  const [hours, setHours] = useState(0);
  const [wages, setWages] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Money Tracker</h1>
      </header>
      <body>
        <form>
          <div className="form-group">
            <label>Hours</label>
            <input type="number" name="hours" className="form-control" onChange={e => setHours(Number(e.target.value))} />
          </div>
          <div className="form-group">
            <label>Wages</label>
            <input type="number" name="wages" className="form-control" onChange={e => setWages(Number(e.target.value))} />
          </div>
        </form>
        <DateTime displayDate={true} displayTime={true} />
        <Timer hours={hours} wages={wages} />
      </body>
    </div>
  );
}

export default App;
