import { Grid, Paper, TextField, Typography } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import * as React from "react";
import { ISingleTodo, TodoContextType } from "../@types/todo";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { TodoContext } from "../context/todoContext";
import NormalStateButton from "./NormalStateButton";
import EditStateButtons from "./EditStateButtons";

const SingleTodo: React.FC<ISingleTodo> = ({ todo }) => {
  const [editStatus, setEditStatus] = React.useState<boolean>(false);
  const [textInput, setTextInput] = React.useState<string>(todo.todoText);
  const [errorStatus, setErrorStatus] = React.useState<boolean>(false);

  // Date-fns time formatting
  const timeText: string = formatDistanceToNow(new Date(todo.createdAt), {
    addSuffix: true,
  });
  const { updateStatus, editTodo, deleteTodo } = React.useContext(
    TodoContext
  ) as TodoContextType;

  // ------------------------------------------------------------
  // Event handler for update button
  // ------------------------------------------------------------
  const handleUpdate = () => {
    updateStatus(todo);
  };

  // ------------------------------------------------------------
  // Event handler for edit button
  // ------------------------------------------------------------
  const handleEdit = () => {
    setEditStatus(true);
  };

  // ------------------------------------------------------------
  // Event handler for delete button
  // ------------------------------------------------------------
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  // ------------------------------------------------------------
  // Event handler for edit save button
  // ------------------------------------------------------------
  const handleTextField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  // ------------------------------------------------------------
  // Event handler for edit save button
  // ------------------------------------------------------------
  const handleSaveEdit = () => {
    const formattedTextInput = textInput.trim();
    if (formattedTextInput.length === 0) {
      return setErrorStatus(true);
    }

    editTodo(todo.id, formattedTextInput);
    setEditStatus(false);
    setErrorStatus(false);
  };

  // ------------------------------------------------------------
  // Event handler for edit cancle button
  // ------------------------------------------------------------
  const handleCancleEdit = () => {
    setTextInput(todo.todoText);
    setEditStatus(false);
    setErrorStatus(false);
  };

  // ------------------------------------------------------------
  // JSX starts
  // ------------------------------------------------------------

  const backgroundColor = todo.isCompleted ? "#EDF7ED" : "#FFFFFF";

  return (
    <div>
      <Paper
        variant="outlined"
        square
        sx={{
          padding: "14px 10px",
          marginBottom: "15px",
          background: backgroundColor,
        }}
      >
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs="auto">
            {todo.isCompleted ? (
              <CheckCircleOutlineOutlinedIcon
                sx={{ color: "rgb(76 175 80)" }}
              />
            ) : (
              <ArrowCircleRightOutlinedIcon />
            )}
          </Grid>
          <Grid item xs>
            {!editStatus ? (
              <Typography
                variant="h6"
                component="h3"
                sx={{ lineHeight: 1, marginBottom: "10px" }}
              >
                {todo.todoText}
              </Typography>
            ) : (
              <TextField
                value={textInput}
                onChange={handleTextField}
                type="text"
                size="small"
                variant="outlined"
                fullWidth
                error={errorStatus}
                helperText={errorStatus ? "Please Enter text" : ""}
                autoFocus
                sx={{ maxWidth: "500px" }}
              />
            )}

            {/* Nested grid */}
            <Grid container spacing={{ xs: 0, sm: 2 }}>
              <Grid item xs={12} sm="auto">
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ color: "#757575" }}
                >
                  Added: {timeText}
                </Typography>
              </Grid>
              <Grid item xs={12} sm="auto">
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ color: "#757575" }}
                >
                  status: {todo.isCompleted ? "Completed" : "Incomplete"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Nested grid */}
          <Grid container item xs={12} sm="auto" spacing={1}>
            {!editStatus ? (
              <NormalStateButton
                handleUpdate={handleUpdate}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              ></NormalStateButton>
            ) : (
              <EditStateButtons
                handleCancleEdit={handleCancleEdit}
                handleSaveEdit={handleSaveEdit}
              ></EditStateButtons>
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SingleTodo;
