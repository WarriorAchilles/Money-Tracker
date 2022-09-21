import React, { useState } from 'react';
import Timer from './Timer';
import DateTime from './DateTime';
import EmptyJar from './assets/EmptyJar.png';
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
        <div className="container-fluid row">
          <div className="left-side col">
            <img id="jar" src={EmptyJar} alt="an empty jar"/>
            <DateTime displayDate={true} displayTime={true}/>
          </div>
          <div className="right-side col">
            <div className="form-container row">
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
            <Timer hours={hours} wages={wages} />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
