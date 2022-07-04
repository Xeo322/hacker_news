import Post from '../@types/interfaces'

const random_handler = (array: Array<number>, count: number) => {
  const result: Array<number> = []
  for (let i = 0; i < count; i++) {
    result.push(array[Math.floor(Math.random() * array.length)])
  }
  return result
}

const post_handler = async (array: Array<number>) => {
  const posts: Post[] = []
  for (const id of array) {
    const post = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(result => result.json())
    const author = await fetch(`https://hacker-news.firebaseio.com/v0/user/${post.by}.json`)
      .then(result => result.json())
    posts.push({
      id: id,
      text: post.title,
      url: post.url ?? 'https://mahdi.blog/',
      time: new Date(post.time),
      score: post.score,
      by: post.by,
      karma: author.karma,
      img: 'https://media.istockphoto.com/photos/natural-black-slate-stone-background-pattern-with-high-resolution-top-picture-id1204580359?k=20&m=1204580359&s=612x612&w=0&h=Jl2jmn7kEUAq0LT8Nu0s9D5KPzqf-BdM6TS5mxk8jRQ='
    })
  }
  return posts
}

const sort_handler = (array: Post[]) => {
  return array.sort((a:Post,b:Post) => {
    if(a.score > b.score) return -1
    return 1
  })
}

export const fetch_news = async (count: number) => {
  try {
    return await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(result => result.json())
      .then(result => random_handler(result, count))
      .then(result => post_handler(result))
      .then(result => sort_handler(result))
  } catch (e) {
    return []
  }

}