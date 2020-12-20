import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const BookContext = createContext()

const BookCotextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: '围城', author: '钱钟书', id: 1 },
    { title: '梦里花落知多少', author: '三毛', id: 2 },
    { title: '面包树上的女人', author: '张小娴', id: 3 },
  ])

  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuidv4() }])
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookCotextProvider
