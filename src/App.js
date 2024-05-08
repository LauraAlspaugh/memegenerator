import logo from './logo.svg';
import React from 'react';
import memesData from './memesData.js';
import './App.css';

function App() {
 
  
  const [memeImage, setMemeImage] = React.useState("")
  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
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
      <button onClick={getMemeImage} className='btn meme-button'>Get a new meme image <i className='mdi mdi-panorama-variant'></i></button>
      <div>
        <img className='meme-image' alt='meme' src={memeImage}></img>
      </div>
    
    </div>
  );
}

export default App;
