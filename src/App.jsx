import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

import Weather from "./routes/Weather";
import WeatherData from "./routes/WeatherData";

const App = () => {
  return (
    <BrowserRouter>
    <div className="fundo">
      <div className="container">
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route exact path="/details/:city" element={<WeatherData />} />
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
