import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: 1, Date: '00/00/0000', Time: '00:00', text: 'Hello world' }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { text, date, time } = action.payload;
      const todo = {
        id: nanoid(),
        text,
        Date: date,
        Time: time,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
