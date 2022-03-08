import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import * as React from "react";
import AddTodo from "./components/AddTodo";
import AllTodos from "./components/AllTodos";
import TodoHeader from "./components/TodoHeader";
import TodoProvider from "./context/todoContext";
import todoTheme from "./styles/todotheme";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <ThemeProvider theme={todoTheme}>
          <Container maxWidth="md">
            <TodoHeader></TodoHeader>
            <AddTodo></AddTodo>
            <AllTodos></AllTodos>
          </Container>
        </ThemeProvider>
      </TodoProvider>
    </div>
  );
}

export default App;
