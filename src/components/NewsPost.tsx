import React from 'react'

import Post from '../@types/interfaces'

const star: string = require('../assets/star.svg').default
const person: string = require('../assets/person.svg').default
const heart: string = require('../assets/heart.svg').default

type NewsPostProps = {
    item: Post
}

const NewsPost: React.FC<NewsPostProps> = ({item}) => {
  return(
    <div className='news_post' data-testid='news_post'>
      <div className='news_post__header'>
        <span className='news_post__timestamp'>{item.time.toLocaleTimeString()}</span>
        <p className='news_post__score'>{item.score}<img src={star} alt='star' className='news_post__svg--right'/></p>
      </div>
      <div className='news_post__container'>
        <img className='news_post__img' src={item.img} alt='mock img'/>
        <h4 className='news_post__text'>{item.text.toUpperCase()}</h4>
      </div>
      <div className='news_post__footer'>
        <p className='news_post__title'>Read it <a className='news_post__url' href={item.url}> here</a></p>
        <span className='news_post__author'><img src={person} alt='person' className='news_post__svg'/>{item.by}<span className='news_post__karma'>{item.karma} </span><img src={heart} alt='heart' className='news_post__svg--right'/></span>
      </div>
    </div>
  )
}

export default NewsPost