import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action/index";
import Child1 from "./Child1";
function App() {
  const [name,setname] =useState("")
  function changename(data){
    setname(data)
  }
  function incrementAdd(){
    
    dispatch(incNumber())
    console.log(myState)
  }
  const myState = useSelector((state) => state.changethenumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={incrementAdd}>
        <span>+</span>
      </button>
      <button onClick={() => dispatch(decNumber())}>
        <span>-</span>
      </button>
      <input value={myState} />
      <div>{name}</div>
      <Child1 changename={changename} />
    </div>
  );
}

export default App;
