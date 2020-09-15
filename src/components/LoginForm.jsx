import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import EventKit from "../data/EventKit";

export default function LoginForm() {
  const history = useHistory();

  const [email, setEmail] = useState("test.user@willandskill.se");
  const [password, setPassword] = useState("js-lesson-10");
  const eventKit = new EventKit();

  function login() {
    eventKit
      .login(email, password)
      .then((res) => res.json())
      .then((data) => {
        eventKit.setToken(data.token);
        history.push("/event-list");
      });
  }
  return (
    <div>
      <div>
        <div>
          <label>
            Email{" "}
            <input
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              placeholder="john.doe@mail.com"
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            placeholder="******"
          ></input>
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
