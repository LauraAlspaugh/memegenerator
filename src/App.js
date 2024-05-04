import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><i className='mdi mdi-wizard-hat'></i>Meme Generator</h1>
        <h4>React Course - Project 3</h4>
      </header>
      <div className='input-fields'>
<input></input>
<input></input>
      </div>
      <button type='button' className='meme-button'>Get a new meme image <i className='mdi mdi-panorama-variant'></i></button>
    </div>
  );
}

export default App;
