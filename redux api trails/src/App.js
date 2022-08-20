import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getApi } from "./redux/action";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApi());
    if (apidata && apidata.length > 0) {
    }
    console.log(apidata);
  }, []);

  const { apidata } = useSelector((state) => {
    return {
      apidata: state.main.apidata,
    };
  });

  return (
    <div className="App">
      <div>Hello</div>
      <div>{apidata.message}</div>
      <img src={apidata.message} />
      {apidata ? (
        <Snackbar open={true} autoHideDuration={2000}>
          <Alert severity="success" sx={{ width: "100%" }}>
            This is a success message!
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar open={true} autoHideDuration={6000}>
          <Alert severity="success" sx={{ width: "100%" }}>
            This is a failed message!
          </Alert>
        </Snackbar>
      )}
      {/* <button onClick={handle}></button> */}
    </div>
  );
}

export default App;
