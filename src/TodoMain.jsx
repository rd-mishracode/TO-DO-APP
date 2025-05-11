// TodoMain.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTodosFromDB } from './featuresofApp/todoComp/todoSlices';
import AddTodo from './component/AddTodo';
import Todos from './component/Todos';

function TodoMain() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodosFromDB());
  }, [dispatch]);

  return (
    <div className="bg-pink-500 h-dvh bg-[url(/todoimgbg.png)] bg-no-repeat bg-center bg-cover">
      <h1 className="bg-black text-white p-4 text-center text-xl" style={{ backgroundColor: 'gray' }}>
        <center>TO-DO LIST</center>
      </h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default TodoMain;
