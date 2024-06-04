import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Form from './Form.jsx';

function App() {
 const [user, setUser] = React.useState("Matt")

  
  const [memeImage, setMemeImage] = React.useState({
    topText: "",
          bottomText: "",
          randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  const [allMemes, setAllMemes] = React.useState([])
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMemeImage(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
  }
  const [messages, setMessages] = React.useState(["a", "b"])
  function handleChange(event){
    const {name, value } = event.target
    setMemeImage(prevMeme => ({
      ...prevMeme,
      [name]: value
  }))
  }
    
    
     React.useEffect(()=> {
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
     } , [])
    
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
    
      <div className='input-fields'>
    
<div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={memeImage.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={memeImage.bottomText}
                    onChange={handleChange}
                />
                </div>
      </div>
      <button onClick={getMemeImage} className='btn meme-button'>Get a new meme image <i className='mdi mdi-panorama-variant'></i></button>
      <div className='meme'>
        <img className='meme--image' alt='meme' src={memeImage.randomImage}></img>
        <h2 className='meme--text top'>{memeImage.topText}</h2>
        <h2 className='meme--text bottom'>{memeImage.bottomText}</h2>
      </div>
    
    </div>
  );
}

export default App;
