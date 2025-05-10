import { createSlice, nanoid } from '@reduxjs/toolkit';

// Load from localStorage on startup
const loadFromLocalStorage = () => {
  try {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
  } catch (e) {
    console.error('Failed to load from localStorage:', e);
    return [];
  }
}

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
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
       localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
