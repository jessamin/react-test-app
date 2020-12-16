import React, {useEffect, useState} from 'react'
import MovieCard from './MovieCard';
import axios from "axios/index";

function MainContent() {
  const [movieList, setMovieList] = useState([])

  const getMovieList = async () => {
    try {
      const movieList = await axios.get("http://localhost:4000/movies?limit=6")
      setMovieList(movieList.data.data);
    }
    catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMovieList()
  }, [])

  return (
    <div className="main-content">
      {movieList.map(movie => (
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

export default MainContent