import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    fetch(`http://localhost:9999/user`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((resp) => {
        console.log(resp);
      });
  };

  return (
    <Router>
      <div className="mainContainer">
        <div className="inputContaciner">
          <label>Enter Email: </label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label>Enter Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/">
          <button
            disabled={password.trim() === "" || email.trim() === ""}
            onClick={loginHandler}
          >
            Login
          </button>
        </Link>
        <button>reset Password</button>

        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
