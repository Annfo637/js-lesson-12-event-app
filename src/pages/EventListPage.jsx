import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventKit from "../data/EventKit";

export default function EventListPage() {
  const [eventList, setEventList] = useState(null);
  const eventKit = new EventKit();

  useEffect(() => {
    fetchEventList();
  }, []);

  function fetchEventList() {
    eventKit
      .fetchEventList()
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
