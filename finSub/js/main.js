import { getElement, loadHeaderFooter, showInDom} from "./utils.mjs";
import {frostDateTemplate, getFrostDate } from "./frostDate.mjs";
import WeatherData from "./weatherInfo.mjs";
import Seeds from "./seedDB.mjs";
// import {returnItems, returnSeedsJson} from "./fromJson.mjs";
import {pickStation } from "./apiReturns.mjs";

loadHeaderFooter();

//get location info
// const station = await pickStation();
//         console.log(station);

//get weather data
// const weather = new WeatherData();
// const displayWeather = weather.renderInDom('#wkWeather');

// get frostDate
// const frostDate = await getFrostDate();
// const displayFrostDate = showInDom('#frostDt', frostDateTemplate(frostDate));





//get seed info
const seedsClass = new Seeds();
seedsClass.init();

console.log(seedsClass);























