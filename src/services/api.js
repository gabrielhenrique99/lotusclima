

import axios from "axios"

const api = axios.create({
   // baseURL: `http://api.weatherapi.com/v1/current.json?key=2c310a2cd27f47e392a175901230703&q=${city}&aqi=no`
})


export default api