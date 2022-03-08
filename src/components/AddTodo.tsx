import { Box, Button, Grid, TextField } from "@mui/material";
import * as React from "react";
import { ITodo, TodoContextType } from "../@types/todo.d";
import { TodoContext } from "../context/todoContext";

const AddTodo: React.FC = () => {
  const [todoInput, setTodoInput] = React.useState<ITodo>({
    todoText: "",
    isCompleted: false,
  });
  const { addTodo } = React.useContext(TodoContext) as TodoContextType;

  // ------------------------------------------------------------
  // Event handler for submit event
  // ------------------------------------------------------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newTodoInput = {
      ...todoInput,
      [e.target.name]: e.target.value,
    };
    setTodoInput(newTodoInput);
  };

  // ------------------------------------------------------------
  // Event handler for submit event
  // ------------------------------------------------------------
  const handleFormSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    const formattedTodoText = todoInput.todoText.trim();
    const formattedTodo = { ...todoInput, todoText: formattedTodoText };

    if (formattedTodoText.length === 0) {
      return;
    }

    addTodo(formattedTodo);

    // Reset input form
    const newTodoInput = {
      todoText: "",
      isCompleted: false,
    };
    setTodoInput(newTodoInput);
  };

  // ------------------------------------------------------------
  // JSX starts
  // ------------------------------------------------------------
  return (
    <div>
      <Box sx={{ marginY: { xs: "50px", sm: "75px" } }}>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm>
              <TextField
                type="text"
                label="Add Todo"
                name="todoText"
                variant="outlined"
                required
                value={todoInput.todoText}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm="auto">
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{ height: "100%" }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default AddTodo;
