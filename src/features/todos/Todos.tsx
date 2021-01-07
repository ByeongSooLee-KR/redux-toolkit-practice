import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, add, del } from './todosSlice';
import styles from './Todos.module.css';

export function Todos() {
  const [todoText, setTodoText] = useState('')

  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()

  const onChange = (e: any) => setTodoText(e.target.value)

  return (
    <div className={styles.wrapper}>
      <h2>TodoList</h2>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!todoText.trim()) {
            return
          }
          dispatch(
            add({ id: Date.now().toString(), txt: todoText })
          )
          setTodoText('')
        }}
      >
        <input value={todoText} onChange={onChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id} onClick={() => dispatch(del(todo.id))}>
            {todo.txt}
          </div>
        ))
        }
      </ul>
    </div>
  )
}

