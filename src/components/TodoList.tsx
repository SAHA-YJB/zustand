import React, { useState } from 'react';
import { useTodoState } from '../store/useTodoState';

const TodoList = () => {
  const [todoText, setTodoText] = useState('');
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoState();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText('');
  };
  return (
    <div>
      <h3>Todo App</h3>
      <form onSubmit={handleSubmit}>
        <input
          id='new-todo'
          type='text'
          value={todoText}
          name='newTodo'
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'unset',
              }}
            >
              {todo.text}
            </span>
            {!todo.isCompleted ? (
              <button onClick={() => toggleTodo(todo.id)}>V</button>
            ) : (
              <button onClick={() => toggleTodo(todo.id)}>{'<-'}</button>
            )}
            <button onClick={() => removeTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
