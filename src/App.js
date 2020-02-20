import React from "react";
import Nav from "./components/nav/Nav";
import Form from "./components/form/Form";
import { WeatherProvider } from "./components/providers/WeatherContext";
import Home from "./components/pages/Home";

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <Nav />
        <Form />
        <Home />
      </div>
    </WeatherProvider>
  );
}

export default App;
