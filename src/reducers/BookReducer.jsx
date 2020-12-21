import { v4 as uuidv4 } from 'uuid'

export const BookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return ([...state, { title: action.book.title, author: action.book.author, id: uuidv4() }])
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id)
    default:
      return state;
  }
}

/*
- 该组件主要是用来解决不同功能函数集合问题
- BookReducer接收两个参数，state和action
- 根据不同的action.type执行不同的功能函数
 */
