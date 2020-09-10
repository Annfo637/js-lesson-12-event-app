import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const EVENT_LIST_URL = `${ROOT_URL}events/events/`;

export default function EventListPage() {
  const { token } = useContext(UserContext);

  useEffect(() => {
    fetchEventList();
  }, []);

  function fetchEventList() {
    fetch(EVENT_LIST_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return (
    <div>
      <h1>EventList Page</h1>
      {token}
    </div>
  );
}
