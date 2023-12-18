import { useEffect } from 'react';
import './App.css';
import Count from './components/Count';
import TodoList from './components/TodoList';
import { useUserState } from './store/useUserState';

function App() {
  const { user, fetchUser } = useUserState();
  console.log('user', user);
  useEffect(() => {
    fetchUser(1);
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <Count />
        <TodoList />
        <p>{user.name}</p>
      </header>
    </div>
  );
}

export default App;
