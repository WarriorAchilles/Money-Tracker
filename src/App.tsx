import React from 'react';
import './App.css';
import Timer from './Timer';
import DateTime from './DateTime';
import { ProgressBar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Money Tracker</h1>
      </header>
      <body>
        <DateTime displayDate={true} displayTime={true} />
        <Timer />
        <ProgressBar now={60} />
      </body>
    </div>
  );
}

export default App;
