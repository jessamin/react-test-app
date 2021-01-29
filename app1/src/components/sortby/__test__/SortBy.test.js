import React from "react";
import { Provider } from 'react-redux'
import { render, screen, fireEvent } from '@testing-library/react'
import store from '../../../redux/store'
import SortBy from "../SortBy";

it('add form submit action', () => {
  render(<Provider store={store}><SortBy /></Provider>)

  // Default value - first element selected.
  let options = screen.getByLabelText('SORT BY')
  expect(options[0].selected).toBeTruthy();
  expect(options[1].selected).toBeFalsy();

  // Select 'rating".
  fireEvent.change(screen.getByTestId('sort-by-select'), { target: { value: "vote_average" } })

  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeTruthy();
})
