import React from 'react';
import './App.css';

const Timer = () => {
  return (
    <div>
      <h1>Testing 1 2 3</h1>
      <p>Hello, I am going to be a timer</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Money Tracker</h1>
      </header>
      <body>
        <Timer />
      </body>
    </div>
  );
}

export default App;
