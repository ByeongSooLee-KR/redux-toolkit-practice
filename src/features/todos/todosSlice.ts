import { createSlice } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../app/store';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, txt: '리액트' },
    { id: 2, txt: '리덕스' },
    { id: 3, txt: '리덕스 툴킷' },
  ],
  reducers: {
    add(state, { payload }) {
      state.push(payload)
    },
    del(state, { payload }) {
      return state.filter(todo => todo.id !== payload)
    },
  },
})

export const { add, del } = todoSlice.actions

export const selectTodos = (state: RootState) => state.todos

export default todoSlice.reducer
