import React from "react";

const WeatherInfo = ({ weatherData }) => {
  return (
    <div>
      <h2>
        {weatherData.location.name}, {weatherData.location.region},{" "}
        {weatherData.location.country}
      </h2>
      <p>Temperatura: {weatherData.current.temp_c}°C</p>
    </div>
  );
};

export default WeatherInfo;
