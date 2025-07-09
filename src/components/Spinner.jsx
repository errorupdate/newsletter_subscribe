import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: 80,
    }}
  >
    <CircularProgress />
  </div>
);

export default Spinner;
