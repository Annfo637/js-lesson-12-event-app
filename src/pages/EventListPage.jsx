import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/";
const EVENT_LIST_URL = `${ROOT_URL}events/events/`;

export default function EventListPage() {
  const { token } = useContext(UserContext);
  const [eventList, setEventList] = useState(null);

  useEffect(() => {
    fetchEventList();
  }, []);

  function fetchEventList() {
    fetch(EVENT_LIST_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEventList(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <h1>EventList Page</h1>
      {eventList &&
        eventList.map((eventItem) => {
          return (
            <div key={eventItem.id}>
              <Link to={`event/${eventItem.slug}`}>{eventItem.title}</Link>
            </div>
          );
        })}
    </div>
  );
}
