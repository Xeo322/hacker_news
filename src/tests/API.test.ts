import {fetch_news} from '../api/fetch_news'

test('API testing', async () => {
  const data = await fetch_news(1)
  expect(data).toEqual([{
    id:  expect.any(Number),
    text: expect.any(String),
    url: expect.any(String),
    time: expect.any(Date),
    score: expect.any(Number),
    by: expect.any(String),
    karma: expect.any(Number),
    img: expect.any(String)
  }])
})