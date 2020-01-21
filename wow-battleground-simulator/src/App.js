import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Battleground } from './Components/Battleground'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Battleground />
      </header>
    </div>
  );
}

export default App;
