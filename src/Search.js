import React, { useState } from "react";
import Weather from "./Weather";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    // alert(city);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={(event) => {
              setCity(event.target.value);
              setLoaded(false);
            }}
          />
          <input type="submit" value="search" />
        </form>
        <Weather city={city} />
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
          <input type="submit" value="search" />
        </form>
      </div>
    );
  }
}
