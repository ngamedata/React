import { Button } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import { clearCart, getApi } from "./feature/cart/cartslice";
import { useDispatch, useSelector } from "react-redux";
import { enable } from "./feature/snackbar/snackbarSlice";
import Snackbars from "./components/SnackBar";
import { useEffect } from "react";
import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();

  const handle = () => {
    dispatch(clearCart());
  };
  const handle2 = (data) => {
    if (data === 2) {
      dispatch(enable({ severity: "success", message: "click 2 " }));
    } else {
      dispatch(enable({ severity: "error", message: "click 3" }));
    }
  };
  useEffect(() => {
    dispatch(getApi("https://dog.ceo/api/breeds/image/random"));
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Snackbars />
      <Button onClick={handle}>Add 50</Button>
      <Button onClick={() => handle2(2)}>Green</Button>
      <Button onClick={() => handle2(3)}>Red</Button>
      <Home/>
    </div>
  );
}

export default App;
