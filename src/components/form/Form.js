import React, { useState, useContext, useEffect } from "react";
import { WeatherContext } from "../providers/WeatherContext";

export default function Form() {
  const APP_KEY = "744b3384c5a94cad26fb50f00221e13c";
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  const [weather, setWeather] = useContext(WeatherContext);

  useEffect(() => {
    fetchWeather();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const updateWeather = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  window.addEventListener("load", () => {
    let long;
    let lat;

    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(position => {
          long = position.coords.longitude;
          lat = position.coords.latitude;
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APP_KEY}`
          )
            .then(res => res.json())
            .then(data =>
              setWeather({
                weather: data.weather[0].description,
                temp: `Temperature: ${Math.floor(data.main.temp - 273.15)} °C`,
                minTemp: `Min(${Math.floor(data.main.temp_min - 273.15)} °C)`,
                maxTemp: `Max(${Math.floor(data.main.temp_max - 273.15)} °C)`,
                wind: "Wind Speed m/s is " + data.wind.speed,
                windDeg: "Coming from " + data.wind.deg + " Degrees",
                country: "Country Code: " + data.sys.country,
                name: data.name,
                clouds: `Clouds count: ${data.clouds.all}`
              })
            );
        })
      : alert("Please enter a city");
  });

  const fetchWeather = props => {
    let checkFetch = response => {
      if (!response.ok) {
        throw alert("Please enter an existing City name");
      }
      return response;
    };
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${[
        query
      ]}&appid=${APP_KEY}`
    )
      .then(checkFetch)
      .then(res => res.json())
      .then(data => {
        setWeather({
          weather: data.weather[0].description,
          temp: `Temperature: ${Math.floor(data.main.temp - 273.15)} °C`,
          minTemp: `Min(${Math.floor(data.main.temp_min - 273.15)} °C)`,
          maxTemp: `Max(${Math.floor(data.main.temp_max - 273.15)} °C)`,
          wind: "Wind Speed: m/s is " + data.wind.speed,
          windDeg: "Coming from " + data.wind.deg + " Degrees",
          country: "Country Code: " + data.sys.country,
          name: data.name,
          clouds: `Clouds count: ${data.clouds.all}`
        });
      });
  };

  return (
    <div className="row container form center-align">
      <form onSubmit={updateWeather} width="500px">
        <input
          id="icon_prefix"
          type="text"
          name="search-city"
          value={search}
          className=" search-input"
          onChange={updateSearch}
        />
        <br />
        <a
          className="waves-effect waves-light btn-small grey darken-4 z-depth-3"
          onClick={updateWeather}
        >
          <i className="material-icons right">cloud</i>search
        </a>
      </form>
    </div>
  );
}
