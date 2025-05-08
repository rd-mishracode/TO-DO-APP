// App.js
import { Provider } from 'react-redux'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'
import store from './app/store'
import './index.css'

function App() {
  return (
    <>
      <h1 className="bg-black text-white p-4 text-center text-xl" style={{backgroundColor:'gray'}}><center>TO-DO LIST</center></h1>
      <Provider store={store}>
        <AddTodo />
        <Todos />
      </Provider>
    </>
  )
}

export default App

