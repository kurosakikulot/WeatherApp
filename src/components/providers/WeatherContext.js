import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = props => {
  const [weather, setWeather] = useState({
    weather: "",
    temp: "",
    minTemp: "",
    maxTemp: "",
    wind: "",
    windDeg: "",
    country: "",
    name: "",
    clouds: ""
  });

  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
      {props.children}
    </WeatherContext.Provider>
  );
};
