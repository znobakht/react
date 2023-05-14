import React, { useState } from "react";
import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "451bc985c8260a70ae8fc1c1627aed25";
let units = "metric";

export default function Weather({ city }) {
  const cityUrl = `${baseUrl}?q=${city}&appid=${apiKey}&units=${units}`;
  let [temperature, setTemperature] = useState(null);
  let [Humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [Mood, setMood] = useState(null);
  let [icon, setIcon] = useState(null);
  let [description, setDescription] = useState(null);

  axios
    .get(cityUrl)
    .then((res) => {
      // console.log(res.data);
    //   let maxTmp, minTmp, Wind, Mood, Humidity;
      setTemperature(Math.round(res.data.main.temp));

      // Mood = res.data.weather[0].main;
      setMood(res.data.weather[0].main);

    //   maxTmp = res.data.main.temp_max;
    //   maxTmp = Math.round(maxTmp);
    //   minTmp = res.data.main.temp_min;
    //   minTmp = Math.round(minTmp);

      setHumidity(res.data.main.humidity);
      // Humidity = ;

      setWind(res.data.wind.speed);
      // Wind = res.data.wind.speed;
      setIcon(
        `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
      );
      setDescription(res.data.weather[0].description);
    })
    .catch((err) => {
      // alert("yes");
      console.error(err);
    });
  if (temperature) {
    return (
      <div>
        <h2>
          The temperature in {city} is {temperature} <br />
          Humidity: {Humidity}
          <br />
          Wind: {wind} km/h
          <br />
          Mood: {Mood}
          <br />
          <img src={icon} alt={description} />
          {/* {icon} */}
        </h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>The city name is not valid</h2>
      </div>
    );
  }
}
