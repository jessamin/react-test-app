import React from 'react'
import { BrowserRouter as Router,
  Switch, Route } from "react-router-dom"

import './App.css';
import Movie from "./components/Movie"
import Home from "./components/Home"
import SearchPage from "./components/SearchPage"
import NoMovieFound from "./components/NoMovieFound"
import NotFound from "./components/404"

function App() {
  return (
    <>
      <div id='message-area'></div>
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route path='/film/:movieId' component={Movie} />
          <Route path='/search/:search' component={SearchPage} />
          <Route path='/no-movie-found' component={NoMovieFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default App
