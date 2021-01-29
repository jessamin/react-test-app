import React from 'react';
import { render } from '@testing-library/react';
import MovieList from "../MovieList";
import {BrowserRouter as Router} from "react-router-dom";

jest.mock('../../customhooks/useMovieListDispatch');

test('renders MOCK custom HOOK', () => {
  const { container } = render(<Router><MovieList/></Router>);
  expect(container.textContent)
    .toMatch('Test Movie 2');
});