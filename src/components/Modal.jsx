import React from "react";
import { Modal as MUIModal, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #a5b4fc",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

const Modal = ({ open, onClose, children }) => (
  <MUIModal open={open} onClose={onClose}>
    <Box sx={style}>{children}</Box>
  </MUIModal>
);

export default Modal;
