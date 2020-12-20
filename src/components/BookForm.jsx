import React, { useState, useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {
  const { addBook } = useContext(BookContext)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, author)
    addBook(title, author)
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
