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
        image="pulpfiction.png"
        rating="4.5"
        reward="Oskar"
        duration="124"
        description="Lorem ipsum jsdfgj askjka asdlkfdakf aslkfdkafv adfklvkalfb afklvaklfnv"
      />
      </ErrorBoundary1>
      <MovieCard
        title="Bohemian Rhapsody"
        genre="Drama, Biography, Music"
        date="2003"
        image="bohemian.png"
        rating="9"
        reward=""
        duration="200"
        description="Lorem ipsum jsdfgj askjka asdlkfdakf aslkfdkafv adfklvkalfb afklvaklfnv"
      />
      <MovieCard
        title="Bill: Vol2"
        genre="Oscar Winning Movie"
        date="1994"
        image="bill.png"
        rating="10"
        reward=""
        duration="90"
        description="Lorem ipsum jsdfgj askjka asdlkfdakf aslkfdkafv adfklvkalfb afklvaklfnv"
      />
      <MovieCard
        title="Avengers: War of Infinity"
        genre="Action & Adventure"
        date="2004"
        image="avengers.png"
        rating="5"
        reward="Oskar"
        duration="100"
        description="Lorem ipsum jsdfgj askjka asdlkfdakf aslkfdkafv adfklvkalfb afklvaklfnv"
      />
      <MovieCard
        title="Inception"
        genre="Action & Adventure"
        date="2003"
        image="inseption.png"
        rating="7.9"
        reward=""
        duration="500"
        description="Lorem ipsum jsdfgj askjka asdlkfdakf aslkfdkafv adfklvkalfb afklvaklfnv"
      />
      <MovieCard
        title="Reservoir dogs"
        genre="Oscar Winning Movie"
        date="1994"
        image="rdogs.png"
        rating="7"
        reward="etlkgne"
        duration="222"
        description="Lorem ipsum jsdfgj askjka asdlkfdakf aslkfdkafv adfklvkalfb afklvaklfnv"
      />
    </div>
  )
}

export default MainContent