import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import { saveTodosToDB, getTodosFromDB } from '../../../utils/db';

export const loadTodosFromDB = createAsyncThunk('todo/loadTodosFromDB', async () => {
  const todos = await getTodosFromDB();
  return todos;
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload.text,
        date: action.payload.date,
        time: action.payload.time,
      };
      state.todos.push(newTodo);
      saveTodosToDB(state.todos); // Save to IndexedDB
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      saveTodosToDB(state.todos); // Update IndexedDB
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTodosFromDB.fulfilled, (state, action) => {
      state.todos = action.payload || [];
    });
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
