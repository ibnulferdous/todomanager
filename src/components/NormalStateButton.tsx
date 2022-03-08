import { Grid, IconButton, Tooltip } from "@mui/material";
import * as React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DoneIcon from "@mui/icons-material/Done";
import { INormalStateButton } from "../@types/todo";

const NormalStateButton: React.FC<INormalStateButton> = ({
  handleUpdate,
  handleEdit,
  handleDelete,
}) => {
  // ------------------------------------------------------------
  // JSX starts
  // ------------------------------------------------------------
  return (
    <Grid container spacing={{ xs: 2, sm: 1 }} justifyContent="flex-end">
      <Grid item xs="auto">
        <Tooltip title="Mark as completed">
          <IconButton
            aria-label="completed"
            size="small"
            onClick={handleUpdate}
          >
            <DoneIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </Grid>

      <Grid item xs="auto">
        <Tooltip title="Edit">
          <IconButton aria-label="edit" size="small" onClick={handleEdit}>
            <BorderColorIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </Grid>

      <Grid item xs="auto">
        <Tooltip title="Delete">
          <IconButton aria-label="delete" size="small" onClick={handleDelete}>
            <DeleteOutlineIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default NormalStateButton;
