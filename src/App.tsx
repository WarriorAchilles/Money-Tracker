import React from 'react';
import './App.css';
import Timer from './Timer';
import DateTime from './DateTime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Money Tracker</h1>
      </header>
      <body>
        <DateTime displayDate={true} displayTime={true} />
        <Timer />
      </body>
    </div>
  );
}

export default App;
