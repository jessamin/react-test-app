import React from 'react'
import MovieCard from './MovieCard';
import { connect } from 'react-redux'

function MainContent(props) {

  const movieReduxList = props.movieStoreList;

  return (
    <div className="main-content">
      {movieReduxList.map(movie => (
        <MovieCard
          id={movie.id}
          title={movie.title}
          genres={movie.genres}
          budget={movie.budget}
          overview={movie.overview}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          revenue={movie.revenue}
          runtime={movie.runtime}
          tagline={movie.tagline}
          vote_average={movie.vote_average}
          vote_count={movie.vote_count}
        />
      ))}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    movieStoreList: state.movies
  }
}

export default connect(mapStateToProps)(MainContent)