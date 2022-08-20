import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import BasicCard from "./BasicCard";
import { CardContent } from "@mui/material";
import { LoadingButton } from "@mui/lab";


function Spinner({ handleToggle, startSpinner,component }) {
  return (
    <div>
      <Backdrop
        invisible={true}
        component={component}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={startSpinner}
        // onClick={handleToggle}
      >
        <CircularProgress color="success" />
      </Backdrop>
    </div>
  );
}

export default Spinner;
