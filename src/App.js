import React from "react";

function App() {
  function login() {
    console.log("login");
  }

  return (
    <div>
      <h1>Event App</h1>
      <div>
        <div>
          <label>
            Email{" "}
            <input
              name="email"
              type="text"
              placeholder="john.doe@mail.com"
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" placeholder="******"></input>
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;
