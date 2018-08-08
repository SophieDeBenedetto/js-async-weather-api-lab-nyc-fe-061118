const API_KEY  = "5357d0ee7dd6ec614e764228b9249e29"
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`

function handleFormSubmit(event) {
  event.preventDefault();
 let city = document.getElementById("city").value
 getWeatherFromApi(city)
}

function getWeatherFromApi(city) {
  debugger;
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city)
    .then(response => response.json())
    .then(displayWeather)
}

function displayWeather(weatherJson) {
  debugger;
}



document.addEventListener('DOMContentLoaded', function() {
 // add the event listener
 let cityForm = document.getElementById("cityForm");
 cityForm.addEventListener("submit", handleFormSubmit)
// $("#cityForm").on("submit", callBack)
 
})







