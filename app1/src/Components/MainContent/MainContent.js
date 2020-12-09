import React from 'react'
import MovieCard from './MovieCard';
import ErrorBoundary1 from './ErrorBoundary';

function MainContent() {
  return (
    <div className="main-content">
      <ErrorBoundary1>
      <MovieCard
        title="Pulp Fiction"
        genre="Action & Adventure"
        date="2004"
        image="pulpfiction"
      />
      </ErrorBoundary1>
      <MovieCard
        title="Bohemian Rhapsody"
        genre="Drama, Biography, Music"
        date="2003"
        image="bohemian"
      />
      <MovieCard
        title="Bill: Vol2"
        genre="Oscar Winning Movie"
        date="1994"
        image="bill"
      />
      <MovieCard
        title="Avengers: War of Infinity"
        genre="Action & Adventure"
        date="2004"
        image="avengers"
      />
      <MovieCard
        title="Inception"
        genre="Action & Adventure"
        date="2003"
        image="inseption"
      />
      <MovieCard
        title="Reservoir dogs"
        genre="Oscar Winning Movie"
        date="1994"
        image="rdogs"
      />
    </div>
  )
}

export default MainContent