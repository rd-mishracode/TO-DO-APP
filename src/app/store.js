import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../featuresofApp/todoComp/todoSlices';

const store = configureStore({
  reducer: {
    todo: todoReducer  // Change "todos" to "todo"
  }
});

export default store;
