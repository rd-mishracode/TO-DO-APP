import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../featuresofApp/todoComp/todoSlices'
import '../index.css'

function AddTodo() {

    const [input, setInput] = useState('')
    const [date,setDate]=useState('')
    const [time,setTime]=useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if(input==''){
          alert('enter a task');
          
        }
        else{
        dispatch(addTodo({ text: input.trim(), date, time }));

        setInput('')
      }
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 flex flex-wrap justify-around
     border-2-white bg-amber-100 rounded-lg">
      <input type="date" name="date" id="date" placeholder='enter date'  className='border-2 bg-blue-300 border-blue-200 rounded-md' onChange={(e)=>{setDate(e.target.value)}} />
      <input type="time" name="time" id="time" className='border-2 bg-blue-300 border-blue-200 rounded-md' placeholder='enter time' onChange={(e)=>{setTime(e.target.value)}} />
      <input
        type="text"
        className="bg-gray-800 rounded-2xl w-4xl border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo