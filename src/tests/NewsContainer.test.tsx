import React from 'react'
import { render, screen } from '@testing-library/react'

import NewsContainer from '../components/NewsContainer'

test('News Container testing', async () => {
  const data = [
    {
      id: 1315,
      text: 'Text',
      url: 'https://google.com',
      time: new Date(),
      score: 34,
      by: 'Me',
      karma: 36,
      img: 'https://i.pinimg.com/736x/43/37/14/433714783597c268eef0388716ed3700.jpg'
    }
  ]
  render(<NewsContainer news={data}/>)
  const Post = screen.getByTestId('news_post')
  expect(Post).toBeInTheDocument()
})