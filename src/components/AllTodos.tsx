import * as React from "react";
import { TodoContextType } from "../@types/todo";
import { TodoContext } from "../context/todoContext";
import SingleTodo from "./SingleTodo";

const AllTodos: React.FC<React.ReactNode> = () => {
  const { todosArray } = React.useContext(TodoContext) as TodoContextType;

  // ------------------------------------------------------------
  // JSX starts
  // ------------------------------------------------------------
  return (
    <main>
      {todosArray.map((todo) => (
        <SingleTodo key={todo.id} todo={todo}></SingleTodo>
      ))}
    </main>
  );
};

export default AllTodos;
