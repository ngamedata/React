import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
export default function NavBar() {
  const { amount } = useSelector((state) => state.cart);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            Redux ToolKIt
          </Typography>
          <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography color="inherit">Amount</Typography>
            <Typography sx={{ marginLeft: "10px" }} color="inherit">
              {amount}
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
