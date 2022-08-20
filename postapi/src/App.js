import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    emailtype: "company",
    contactnumber: "",
  });

  async function postdataapicall(data) {
    const response = await axios.post(
      "https://a6f6-203-109-100-245.in.ngrok.io/identity/api/v1/auth/register",
      {
        user: {
          firstName: "sdsdsadsd",
          lastName: "Msssssdsads",
          registeredAs: "company",
          email: "allwyn.menezessdsasad@humancloud.biz",
          password: "pass@1sss23",
          contactNumber: "123456789",
        },
      }
    );
    console.log(response);
  }
  function handleclick() {
    postdataapicall(user);
  }
  function handlechange(e) {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(user);
  }
  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={user.username}
          onChange={handlechange}
          required
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          value={user.password}
          onChange={handlechange}
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={user.email}
          onChange={handlechange}
          required
        />
        <input
          type="text"
          placeholder="contactnumber"
          name="contactnumber"
          value={user.contactnumber}
          onChange={handlechange}
          required
        />
      </form>
      <button onClick={handleclick}>click me</button>
    </div>
  );
}

export default App;
