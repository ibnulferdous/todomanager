import { Button, Grid, Typography } from "@mui/material";
import * as React from "react";
import { TodoContextType } from "../@types/todo";
import { TodoContext } from "../context/todoContext";

const TodoHeader: React.FC = () => {
  const { deleteAllTodos, deleteCompletedTodos } = React.useContext(
    TodoContext
  ) as TodoContextType;

  return (
    <header>
      <Grid container spacing={2} paddingTop="25px">
        <Grid item xs={12} sm>
          <Typography
            variant="h4"
            gutterBottom
            component="h1"
            align="center"
            color="primary"
            sx={{ fontWeight: 700, textAlign: { xs: "center", sm: "start" } }}
          >
            Todo Manager
          </Typography>
        </Grid>
        <Grid
          container
          item
          spacing={2}
          xs={12}
          sm="auto"
          justifyContent="center"
        >
          <Grid item xs="auto">
            <Button variant="contained" onClick={deleteAllTodos}>
              Delete All
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button variant="outlined" onClick={deleteCompletedTodos}>
              Delete Completed
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
};

export default TodoHeader;
