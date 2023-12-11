import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "./modal.styles";

const BasicModal = ({
  header,
  description,
  open,
  close,
  onCancel,
  onConfirm,
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.box}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={style.typography}
          >
            {header}
          </Typography>
          <Typography id="modal-modal-description" sx={style.typography1}>
            {description}
          </Typography>
          <Box sx={style.box1}>
            <Button sx={style.button1} onClick={onCancel}>
              Cancel
            </Button>
            <Button sx={style.button2} onClick={onConfirm} color="primary">
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal;
