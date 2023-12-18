import './App.css';
import Count from './components/Count';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Count />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
