const API_KEY  = "5357d0ee7dd6ec614e764228b9249e29"
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`

function handleFormSubmit(event) {
  event.preventDefault();
  let city = document.getElementById("city").value
  fetchCurrentWeather(city)
}

function fetchCurrentWeather(city) {
 // use fetch to make a request to the weather api to get weather for this city
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&type=like&units=imperial&APPID=${API_KEY}`
 fetch(url)
  .then(function(response) {
    return response.json()
  })
  .then(displayCurrentWeather)
}

function displayCurrentWeather(json) {
document.getElementById("temp").value(json.main.temp)
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
 // add the event listener
 document.getElementById("cityForm").addEventListener("submit", handleFormSubmit)
  // $("form").on("submit", handleFormSubmit)
})







