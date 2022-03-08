import { Grid, IconButton, Tooltip } from "@mui/material";
import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { IEditStateButtons } from "../@types/todo";

const EditStateButtons: React.FC<IEditStateButtons> = ({
  handleCancleEdit,
  handleSaveEdit,
}) => {
  // ------------------------------------------------------------
  // JSX starts
  // ------------------------------------------------------------
  return (
    <Grid container spacing={{ xs: 2, sm: 1 }} justifyContent="flex-end">
      <Grid item xs="auto">
        <Tooltip title="Save">
          <IconButton
            aria-label="completed"
            size="small"
            onClick={handleSaveEdit}
          >
            <DoneIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </Grid>

      <Grid item xs="auto">
        <Tooltip title="Delete">
          <IconButton
            aria-label="delete"
            size="small"
            onClick={handleCancleEdit}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default EditStateButtons;
