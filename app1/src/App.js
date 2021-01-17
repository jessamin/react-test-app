import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ControlsMenu from "./components/ControlsMenu";
import SortBy from "./components/SortBy";

function App() {
  return (
    <div className="movie-page">
      <Header/>
      <div className="controls">
        <ControlsMenu />
        <SortBy />
        <hr />
      </div>
      <MainContent/>
    </div>
  );
}

export default App;
