import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/exports';
import { setName } from './redux/action/action';
import { useState } from 'react';

function App() {
  const [data,setData]=useState("")
  const name = useSelector((state)=>state.userName)
  const dispatch=useDispatch()
  const array=useSelector((state)=>state)
  function handlechange(e){
    setData(e.target.value)
  }
  function handleclick()
  {

    console.log(array)
      dispatch(setName("data"))
  }
  return (
    <div className="App">
      <input type="text" value={data} onChange={handlechange} />
      <button onClick={handleclick}>click</button>
      <div>{name}</div>
    </div>
  );
}

export default App;
