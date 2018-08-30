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

    // ======= get weather data by city name =======
  	let weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";

    fetch()
      .then( (resp) => {
        console.log("== then1 ==");
        return resp.json()
      })
      .catch( error => {
        console.log("== catch1 ==");
        console.error(`Oh no! ${error}`)
      })
      .then( json => {
        console.log("== then2 ==");
        console.log(json);
        return json
      } )
      .catch( error => {
        console.log("== catch2 ==");
        console.error(`Ruh-roh! Couldn't convert the json: ${error}`)
      })
      .then( json => {
        console.log("== then3 ==");
        console.log("json.people", json.people);
        printAstroNames(json.people);
      } )

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
