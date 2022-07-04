import React, {useEffect, useState} from 'react'

import Header from './components/Header'
import Loader from './components/Loader'
import NewsContainer from './components/NewsContainer'
import {fetch_news} from './api/fetch_news'
import Post from './@types/interfaces'

function App() {

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    (async () => {
      const data = await fetch_news(10)
      setPosts(data)
    })()
  }, [])

  return (
    <div className="App">
      <Header/>
      <div className='container'>
        {posts.length > 0 ? <NewsContainer  news = {posts}/> : <Loader/>}
      </div>
    </div>
  )
}

export default App
