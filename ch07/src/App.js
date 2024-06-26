import React, { useState, useRef, useCallback } from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function App() {
   const [todos, setTodos] = useState([
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: false,
      },
   ])

   // 고유 값으로 사용 될 id
   // ref 를 사용하여 변수 담기
   const nextId = useRef(4)

   const onInsert = useCallback(
      (text) => {
         const todo = {
            id: nextId.current,
            text,
            checked: false,
         }
         setTodos(todos.concat(todo))
         nextId.current += 1 // nextId 1 씩 더하기
      },
      [todos]
   )

   const onRemove = useCallback(
      (id) => {
         setTodos(todos.filter((todo) => todo.id !== id))
      },
      [todos]
   )

   const onToggle = useCallback(
      (id) => {
         setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
      },
      [todos]
   )

   return (
      <TodoTemplate>
         <TodoInsert onInsert={onInsert} />
         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
   )
}

export default App
