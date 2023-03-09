import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function WeatherData() {

  const { city } = useParams() 
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=2c310a2cd27f47e392a175901230703&q=${city}&aqi=no`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [city]);

  return (
    <div>
      <h1>Dados do Clima Da Cidade {city}</h1>
      <p>Umidade Relativa do Ar: {weatherData?.current?.humidity}%</p>
      <p>Vento: {weatherData?.current?.wind_kph} km/h</p>
      <p>Sensação Térmica: {weatherData?.current?.feelslike_c} °C</p>
    </div>
  );
}

export default WeatherData;
