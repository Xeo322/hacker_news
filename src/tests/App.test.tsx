import React from 'react'
import { render, screen } from '@testing-library/react'

import App from '../App'

test('App testing',() => {
  render(<App />)
  const Header = screen.getByTestId('header')
  expect(Header).toBeInTheDocument()
  const Loader = screen.getByTestId('loader')
  expect(Loader).toBeInTheDocument()
})
