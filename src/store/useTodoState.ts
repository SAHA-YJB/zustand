import { create } from 'zustand';

interface TodoState {
  todos: { text: string; isCompleted: boolean; id: number }[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

let id = 0;
function getId() {
  return id++;
}

export const useTodoState = create<TodoState>((set) => ({
  todos: [],
  addTodo: (todoText) =>
    set((state) => ({
      todos: [
        { text: todoText, id: getId(), isCompleted: false },
        ...state.todos,
      ],
    })),
  removeTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    })),
  toggleTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      }),
    })),
}));
