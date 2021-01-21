import axios from "axios"

const apiUrl = 'http://localhost:4000/movies'

export function fetchMoviesListApi(uriPath) {
  return axios.get(`${apiUrl}?${uriPath}`)
}

export function addMovieApi(movie) {
  return axios.post(apiUrl, movie)
}

export function fetchMovieApi(movieId) {
  return axios.get(`${apiUrl}/${movieId}`)
}

export function saveMovieApi(movie) {
  return axios.put(apiUrl, movie);
}

export function deleteMovieApi(movieId) {
  return axios.delete(`${apiUrl}/${movieId}`)
}
