import React from 'react'
import { BrowserRouter as Router,
  Switch, Route } from "react-router-dom"

import './App.css';
import MoviePage from "./components/moviepage/MoviePage"
import HomePage from "./components/homepage/HomePage"
import SearchPage from "./components/searchpage/SearchPage"
import NoMovieFoundPage from "./components/nomoviefoundpage/NoMovieFoundPage"
import NotFoundPage from "./components/notfoundpage/NotFoundPage"

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
