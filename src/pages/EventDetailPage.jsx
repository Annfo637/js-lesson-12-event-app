import React, { useEffect, useContext, useState } from "react";
import EventKit from "../data/EventKit";

export default function EventDetailPage(props) {
  const [mainPageData, setMainPageData] = useState(null);
  const eventKit = new EventKit();

  useEffect(() => {
    fetchEventMainPage();
  }, []);

  function fetchEventMainPage() {
    const currentSlug = props.match.params.slug;
    eventKit
      .fetchEventMainPage(currentSlug)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMainPageData(data);
      });
  }

  return (
    <div>
      {mainPageData && (
        <div>
          <h1>{mainPageData.title}</h1>
          <p>{mainPageData.description}</p>
          {mainPageData.actionPoints &&
            mainPageData.actionPoints.map((actionPoint, index) => {
              return (
                <div key={index}>
                  <p>{actionPoint.title}</p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
