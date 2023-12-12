import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import { style } from "./error-modal.styles";

const NestedModal = ({ onClear, error }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button sx={style.button} onClick={handleOpen}>
        View error
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style.box, width: 300 }}>
          <p id="child-modal-description">{error} </p>
          <Button
            sx={{
              bgcolor: "white",
              color: "#360030",
              "&:hover": { bgcolor: "#260b1d", color: "white" },
            }}
            onClick={onClear}
          >
            Exit
          </Button>
        </Box>
      </Modal>
    </>
  );
};

const ErrorModal = ({ onClear, error }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Modal
        open={!!error}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style.box}>
          <h2 id="parent-modal-title">Yikes! an error just occurred</h2>
          <p id="parent-modal-description">
            Do not worry so much, check error below
          </p>
          <NestedModal onClear={onClear} error={error} />
        </Box>
      </Modal>
    </div>
  );
};

export default ErrorModal;
