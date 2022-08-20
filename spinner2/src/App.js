import logo from "./logo.svg";
import "./App.css";
import { Stack } from "@mui/system";
import BasicCard from "./BasicCard";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    function settime() {
      setTimeout(() => {
        setFlag(false);
      }, 2000);
    }
    settime();
  });

  return (
    <div className="App">
      <Stack spacing={2} direction="row" justifyContent="space-around" m="15%">
        <BasicCard flag={flag} color={"secondary"} />
        <BasicCard flag={flag} color={"success"} />
        <BasicCard flag={flag} color={"inherit"} />
      </Stack>
    </div>
  );
}

export default App;
