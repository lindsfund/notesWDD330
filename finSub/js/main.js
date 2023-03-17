import { loadHeaderFooter } from "./utils.mjs";
import {getFrostDate } from "./frostDate.mjs";
import WeatherData from "./weatherInfo.mjs";
import {pickStation } from "./apiReturns.mjs";








loadHeaderFooter();

//get location info
// const station = await pickStation();
//         console.log(station);

//get frostDate
const frostDate = await getFrostDate();
        console.log(frostDate);

//get weather data
const weather = new WeatherData();
const finWeather = weather.init(weather);
        console.log(finWeather);



















