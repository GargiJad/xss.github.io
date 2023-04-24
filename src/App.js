import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import myAudioFile1 from './components/assests/musics/Digital Technology.mp3';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  // const audio = new Audio(myAudioFile1);
  // audio.play();
  // useEffect(() => {
  //   const audio = new Audio(myAudioFile1);
  //   audio.play();
  // }, []);
  return (
    <>
      <Home />
      {/* <Blog/> */}
    </>
  );
}

export default App;
