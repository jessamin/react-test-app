import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Controls from './components/Controls';

function App() {
  return (
    <div className="movie-page">
      <Header/>
      <Controls/>
      <MainContent/>
    </div>
  );
}

export default App;
