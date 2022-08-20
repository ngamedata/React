import React from "react";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  const { message } = useSelector((state) => state.cart);
  return (
    <div>
      <h3>{message}</h3>
      <img src={message} />
    </div>
  );
}

export default Home;
