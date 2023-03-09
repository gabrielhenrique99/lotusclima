import React, {useState} from 'react'
import axios from "axios";
import SearchBar from "../components/SearchBar"
import WeatherInfo from "../components/WeatherInfo";
import Footer from '../components/Footer';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  const searchCity = (query) => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=2c310a2cd27f47e392a175901230703&q=${query}&aqi=no`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(weatherData);
  return (
    <div>
      <SearchBar onSearch={searchCity} />
      {weatherData ? (
        <WeatherInfo weatherData={weatherData} />
      ) : (
        <p>Descubra o clima da sua cidade.</p>
      )}

      <Footer cityName={weatherData?.location?.name}/>
    </div>
      
  )
}

export default Weather