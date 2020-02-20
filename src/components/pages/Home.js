import React, { useContext } from "react";
import { WeatherContext } from "../providers/WeatherContext";

export default function Home() {
  const [weather] = useContext(WeatherContext);

  return (
    <div className="container">
      <div className="home">
        {" "}
        <h2 className="city-name">{weather.name}</h2>
        <p> {weather.country} </p>
        <p className="weather-description teal-text accent-2">
          {" "}
          {weather.weather.toUpperCase()} <br />
          <span className="clouds-count">{weather.clouds}</span>
        </p>
        <p className="temperature cyan-text accent-2">{`${weather.temp} ${weather.minTemp} ${weather.maxTemp}`}</p>
        <p className="wind light-blue-text accent-2">
          {" "}
          {weather.wind} {weather.windDeg}
        </p>
      </div>
    </div>
  );
}
