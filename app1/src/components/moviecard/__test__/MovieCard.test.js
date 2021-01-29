import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';

import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

import MovieCard from '../MovieCard'

const movie = {
  id: 3333,
  title: 'Test Movie',
  vote_average: 5.5,
  release_date: '2019-10-10',
  genres: ['Drama', 'Action'],
  poster_path: 'www'
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Router><MovieCard movie={movie}></MovieCard></Router>, div)
})

it('renders card correctly', () => {
  const { getByTestId } = render(<Router><MovieCard movie={movie}></MovieCard></Router>)
  expect(getByTestId('movie-card')).toHaveTextContent('Test Movie')
})

it('matches snapshot', () => {
  const tree = renderer.create(<Router><MovieCard movie={movie}></MovieCard></Router>).toJSON()
  expect(tree).toMatchSnapshot()
})