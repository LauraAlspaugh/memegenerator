import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  function clickMe(){
    console.log("i was clicked")
  }
  const [count, setCount] = React.useState(0)
  function add(){
    console.log("Add")
    setCount(count + 1)
  
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1><i className='mdi mdi-wizard-hat'></i>Meme Generator</h1>
        <h4>React Course - Project 3</h4>
      </header>
      <div className='input-fields'>
<input placeholder='Top Text....'></input>
<input placeholder='Bottom Text...'></input>
      </div>
      <button onClick={clickMe} className='btn meme-button'>Get a new meme image <i className='mdi mdi-panorama-variant'></i></button>
      <h1>{count}</h1>
      <button onClick={add}></button>
    </div>
  );
}

export default App;
