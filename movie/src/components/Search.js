import { React, useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { getMovies } from "../redux/feature/movieSlice";
function Search() {
  const [name, setName] = useState("spider");
  const {movieList : {Error:error}}=useSelector((state)=> ({...state.movie}))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);
  return (
    <div>
      <h2 >Movie Search App</h2>
      <form  onSubmit={(e) => e.preventDefault()}>
        <TextField
          type="text"
          fullwidth
          sx={{ m: 1, width: "55ch" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Search;
