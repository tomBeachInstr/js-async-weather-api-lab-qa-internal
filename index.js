const API_KEY = "e68984af4783cdfe425e604d390fc92d";

function handleFormSubmit(event) {
    console.log("== handleFormSubmit ==")
    event.preventDefault();
    let city = document.getElementById("city").value;
    console.log("city:", city);
    fetchCurrentWeather(city);
}

function fetchCurrentWeather(city) {
    console.log("== fetchCurrentWeather ==")

    // ======= get weather data by city name =======
  	let weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
    weatherUrl += city;
    weatherUrl += "&APPID=";
    weatherUrl += API_KEY;
    console.log("weatherUrl:", weatherUrl);

    fetch(weatherUrl)
      .then( (weatherData) => {
        console.log("== then1 ==");
        return weatherData.json()
      })
      .catch( error => {
        console.log("== catch1 ==");
        console.error(`Oh no! ${error}`);
      })
      .then( weatherJson => {
        console.log("== then2 ==");
        return weatherJson
      } )
      .catch( error => {
        console.log("== catch2 ==");
        console.error(`Ruh-roh! Couldn't convert the json: ${error}`)
      })
      .then( weatherJson => {
        console.log("== then3 ==");
        displayCurrentWeather(weatherJson);
      })
}

function displayCurrentWeather(json) {
    console.log("== displayCurrentWeather ==")
    //render current weather data to the DOM using provided IDs and json from API
    console.log("weatherJson:", weatherJson);
}

function fetchFiveDayForecast(city) {
    console.log("== fetchFiveDayForecast ==")
    //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
    console.log("== displayFiveDayForecast ==")
    //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  console.log("== createChart ==")
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  console.log("-- DOMContentLoaded --")
  document.getElementById("submitBtn").addEventListener("click", handleFormSubmit);
  console.log("document.getElementById('submitBtn'):", document.getElementById("submitBtn"));
})





// =======
