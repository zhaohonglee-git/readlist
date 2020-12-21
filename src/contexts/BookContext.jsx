import React, { createContext, useReducer, useEffect } from 'react'
import { BookReducer } from '../reducers/BookReducer'

export const BookContext = createContext()

const BookCotextProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer, [
    { title: '三体', author: '刘慈欣', id: 1 },
    { title: '红楼梦', author: '曹雪芹', id: 2 }
  ], () => {
    const result = localStorage.getItem('books')
    return (
      result ? (JSON.parse(result)) : ([])
    )
  })

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookCotextProvider

/*
- 创建一个上下文，有两个输出（BookContext和BookContextProvider）
- 引入useReducer用来减少内部函数的书写，将处理函数写在单独的Reducer中，精简该组件的代码
- useReducer接收两个参数：BookReducer 初始state数据值，得到books数据值和dispatch函数
- dispatch函数就是用来解决不同情况需要执行的函数代码集问题
- 下一步请看BookReducer组件
- 利用useEffect来实现localStorage的数据存储,为了逻辑严谨，对原始的数据做了判断
*/
