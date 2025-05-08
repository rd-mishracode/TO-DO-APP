// App.js
import { Provider } from 'react-redux'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'
import store from './app/store'
import './index.css'

function App() {
  return (
    < div className='bg-pink-500 h-dvh bg-[url(/public/todoimgbg.png)] bg-no-repeat bg-center bg-cover'>
      <h1 className="bg-black text-white p-4 text-center text-xl" style={{backgroundColor:'gray'}}><center>TO-DO LIST</center></h1>
      <Provider store={store}>
        <AddTodo />
        <Todos />
      </Provider>
    </div>
  )
}

export default App

