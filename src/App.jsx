// App.jsx
import { Provider } from 'react-redux';
import store from './app/store';
import TodoMain from './TodoMain';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <TodoMain />
    </Provider>
  );
}

export default App;
