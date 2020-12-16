import React from 'react';
import './App.css';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import Controls from './Controls/Controls';

function App() {
  return (
    <div class="movie-page">
      <Header/>
      <Controls/>
      <MainContent/>
    </div>
  );
}

export default App;
