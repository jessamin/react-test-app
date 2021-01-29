import React from "react";
import { Provider } from 'react-redux'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import store from '../../../redux/store'
import ControlsMenu from "../ControlsMenu";

it('Menu panel ', async () => {
  const { container } = render(<Provider store={store}><ControlsMenu /></Provider>)
  expect(screen.getByText("ALL")).toBeInTheDocument()

  userEvent.click(screen.getByText('CRIME'))

  const activeElement = container.getElementsByClassName('active').item(0).textContent
  expect(activeElement).toBe('CRIME')
})
