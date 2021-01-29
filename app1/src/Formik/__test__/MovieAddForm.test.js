import React from "react";
import { Provider } from 'react-redux'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import store from '../../redux/store'
import MovieAddForm from "../MovieAddForm";

it('add form submit action', async () => {
  const { getByText, getAllByText, queryByText, asFragment } = render(<Provider store={store}><MovieAddForm /></Provider>)

  // Snapshot.
  expect(asFragment(<Provider store={store}><MovieAddForm /></Provider>)).toMatchSnapshot()

  // Check rendered form. Than click Submit button.
  fireEvent.click(getByText('Submit'))
  await waitFor(() => {
    expect(getByText(/Add Movie/i)).toBeInTheDocument()
    expect(queryByText(/Require/i)).toBeNull()
  });

  // Submit empty form. 5 'Required' messages expected.
  await waitFor(() => {
    expect(getAllByText(/Required/i).length).toEqual(5)
  });

  await waitFor(() => {
    userEvent.type(screen.getByLabelText('Title'), '1')
  });

  await waitFor(() => {
    expect(screen.getByDisplayValue(/1/i)).toBeInTheDocument()
  });
})
