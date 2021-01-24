import React from 'react'
import { BrowserRouter as Router,
  Switch, Route } from "react-router-dom"

import './App.css';
import MoviePage from "./components/MoviePage"
import HomePage from "./components/HomePage"
import SearchPage from "./components/SearchPage"
import NoMovieFoundPage from "./components/NoMovieFoundPage"
import NotFoundPage from "./components/NotFoundPage"

function App() {
  return (
    <>
      <div id='message-area'></div>
      <Router>
        <Switch>
          <Route exact={true} path='/' component={HomePage} />
          <Route path='/film/:movieId' component={MoviePage} />
          <Route path='/search/:search' component={SearchPage} />
          <Route path='/no-movie-found' component={NoMovieFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  )
}

export default App
