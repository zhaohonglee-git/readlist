import React, { useState, useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {
  const { dispatch } = useContext(BookContext)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_BOOK', book: { title: title, author: author } })
    setTitle('')
    setAuthor('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="书名" onChange={(e) => setTitle(e.target.value)} value={title} />
      <input type="text" placeholder="作者" onChange={(e) => setAuthor(e.target.value)} value={author} />
      <input type="submit" value='添加书籍' />
    </form>
  )
}

export default BookForm

/*
- 解构BookContex  间接等于引入了BookReducer函数
- 通过BookContext解构dispatch函数
- 需要针对的函数功能时，利用dispatch函数来实现，只需提供dispatch函数对应的type,payload即可，即可在BookReducer中执行对应的action函数
*/
