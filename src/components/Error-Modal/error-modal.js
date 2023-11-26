import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

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
      <Button
        sx={{
          bgcolor: "white",
          color: "#360030",
          "&:hover": { bgcolor: "#260b1d", color: "white" },
        }}
        onClick={handleOpen}
      >
        View error
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
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
        <Box sx={{ ...style }}>
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
