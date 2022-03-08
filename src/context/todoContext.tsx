import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { ITodo, TodoContextType } from "../@types/todo.d";

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
  const todosFromLSJSON = localStorage.getItem("todos");
  const initialValue = todosFromLSJSON ? JSON.parse(todosFromLSJSON) : [];
  const [todosArray, setTodosArray] = React.useState<ITodo[]>(initialValue);

  // ------------------------------------------------------------
  // Function to add todos in the LS
  // ------------------------------------------------------------
  const addTodo = (input: ITodo) => {
    const todosFromLSJSON = localStorage.getItem("todos");
    let newTodos: ITodo[] = [];
    const newTodo = {
      ...input,
      id: uuidv4(),
      createdAt: new Date(),
    };

    if (!todosFromLSJSON) {
      newTodos.push(newTodo);
    } else {
      const todosFromLS = JSON.parse(todosFromLSJSON);
      newTodos = [...todosFromLS, newTodo];
    }

    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodosArray(newTodos);
  };

  // ------------------------------------------------------------
  // Function to update completed status
  // ------------------------------------------------------------
  const updateStatus = (todo: ITodo): void => {
    const newTodos = todosArray.map((singleTodo) =>
      singleTodo.id === todo.id
        ? { ...singleTodo, isCompleted: !singleTodo.isCompleted }
        : singleTodo
    );

    setTodosArray(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  // ------------------------------------------------------------
  // Function to edit single todo
  // ------------------------------------------------------------
  const editTodo = (id: string, text: string): void => {
    const newTodos = todosArray.map((singleTodo) =>
      singleTodo.id === id ? { ...singleTodo, todoText: text } : singleTodo
    );

    setTodosArray(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  // ------------------------------------------------------------
  // Function to delete single todo
  // ------------------------------------------------------------
  const deleteTodo = (id: string): void => {
    const newTodos = todosArray.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodosArray(newTodos);
  };

  // ------------------------------------------------------------
  // Function to delete all todos
  // ------------------------------------------------------------
  const deleteAllTodos = (): void => {
    if (todosArray.length === 0) {
      return;
    }

    localStorage.removeItem("todos");
    setTodosArray([]);
  };

  // ------------------------------------------------------------
  // Function to delete all todos
  // ------------------------------------------------------------
  const deleteCompletedTodos = (): void => {
    if (todosArray.length === 0) {
      return;
    }

    const newTodos = todosArray.filter((todo) => todo.isCompleted !== true);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodosArray(newTodos);
  };

  // ------------------------------------------------------------
  // JSX starts
  // ------------------------------------------------------------
  return (
    <TodoContext.Provider
      value={{
        addTodo,
        todosArray,
        updateStatus,
        editTodo,
        deleteTodo,
        deleteAllTodos,
        deleteCompletedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
