import React from 'react'

import Post from '../@types/interfaces'

import NewsPost from './NewsPost'

type NewsListProps = {
    news: Post[]
}

const NewsContainer: React.FC<NewsListProps> = ({news}) => {
  return (
    <div className='news_container' data-testid='news_container'>
      {news.map(item => {
        return <NewsPost key={item.id} item={item}/>
      })}
    </div>
  )
}

export default NewsContainer