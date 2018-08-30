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
    console.log("city:", city);
}

function displayCurrentWeather(json) {
    console.log("== displayCurrentWeather ==")
    //render current weather data to the DOM using provided IDs and json from API
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
