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
      <div>
        <img className='meme-image' alt='meme' src='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVtZXxlbnwwfHwwfHx8MA%3D%3D'></img>
      </div>
      <h1>{count}</h1>
      <button onClick={add}></button>
    </div>
  );
}

export default App;
