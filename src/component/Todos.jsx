import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../featuresofApp/todoComp/todoSlices';
import '../index.css';

function Todos() {
  const todos = useSelector(state => state.todo.todos);  
  const dispatch = useDispatch();

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-yellow-900 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4"><center>Todo List</center></h2>

      {todos.length === 0 ? (
        <p className="text-gray-300 text-center">No todos for now. Add some!</p>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-green-700 hover:bg-red-800
                transition-colors px-4 py-3 rounded-lg shadow-sm"
            >
              <div className=" flex justify-between w-1.5 gap-1.5 bg-amber-600">
              <span className="text-sm text-gray-300">{todo.Date}</span>
              <span className="text-sm text-gray-300"> {todo.Time}</span>
                <span className="text-white text-lg">{todo.text}</span>
                
              </div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 hover:bg-red-600 transition-colors px-3 
                  py-1 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                DELETE
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;
