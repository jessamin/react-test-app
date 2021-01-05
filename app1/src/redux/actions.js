import { ACTION } from './types'
import { client } from './client';

const url = '/movies';

export function initAppAction(movieList) {
  return {
    type: ACTION.INIT_APPLICATION,
    payload: movieList
  }
}

export function fetchMovies(movieList) {
  return {
    type: ACTION.FETCH_MOVIES,
    payload: movieList
  }
}

export function fetchMoviesAction(){
  return dispatch => {
    fetch('http://localhost:4000/movies?limit=6')
      .then(res => res.json())
      .then(res => dispatch(fetchMovies(res)))
  }
}
