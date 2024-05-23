import logo from './logo.svg';
import React from 'react';
import memesData from './memesData.js';
import './App.css';
import Header from './Header.jsx';

function App() {
 const [user, setUser] = React.useState("Matt")
  
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
          bottomText: "",
          randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMemeImage(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
  }
  const [messages, setMessages] = React.useState(["a", "b"])
    
    
    
  return (
    <div className="App">
      <header className="App-header">
        <h1><i className='mdi mdi-wizard-hat'></i>Meme Generator</h1>
        <h4>React Course - Project 3</h4>
      </header>
      <div>
        <h2>
<Header user = {user}/>
        </h2>
      </div>
        <div>
            {
                messages.length > 0 && 
                <h1>You have {messages.length} unread messages!</h1>
            }
        </div>
      <div className='input-fields'>
<input placeholder='Top Text....'></input>
<input placeholder='Bottom Text...'></input>
      </div>
      <button onClick={getMemeImage} className='btn meme-button'>Get a new meme image <i className='mdi mdi-panorama-variant'></i></button>
      <div>
        <img className='meme-image' alt='meme' src={memeImage.randomImage}></img>
      </div>
    
    </div>
  );
}

export default App;
