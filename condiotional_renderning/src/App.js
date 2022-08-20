import logo from "./logo.svg";
import "./App.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

function App() {
  const arr = ["sdsad", "dad", "ddddf", "dsdsdsd"];
  const [temp, settemp] = useState([]);
  const [flag, setFlag] = useState(false);
  function handle(ele) {
    console.log(ele);
    setFlag(!flag);
    if (temp.includes(ele)) {
      let index = temp.indexOf(temp);
      temp.splice(index, 1);
      settemp(temp);
    } else {
      temp.push(ele);
      settemp(temp);
    }
    console.log(temp);
  }
  useEffect(() => {}, [temp,flag]);
  return (
    <div className="App">
      <Stack direction="row" spacing={2}>
        {arr.map((ele) => {
          if (temp.includes(ele)) {
            return (
              <div key={ele}>
                <Chip
                  label={ele}
                  color="primary"
                  onClick={() => handle(ele)}
                />
              </div>
            );
          } else
            return (
              <div key={ele}>
                <Chip
                  label={ele}
                  color="primary"
                  variant="outlined"
                  onClick={() => handle(ele)}
                />
              </div>
            );
        })}
      </Stack>
    </div>
  );
}

export default App;
