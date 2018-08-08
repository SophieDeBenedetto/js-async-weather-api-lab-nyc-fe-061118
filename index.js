const API_KEY  = "5357d0ee7dd6ec614e764228b9249e29"

function handleFormSubmit(event) {
  event.preventDefault();
 let city = document.getElementById("city").value
 getWeatherFromApi(city)
}

function getWeatherFromApi(city) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + API_KEY + "&units=imperial")
    .then(response => response.json())
    .then(displayWeather)
}

function displayWeather(weatherJson) {
  let temp = weatherJson.main.temp
  let tempRow = document.getElementById("temp")
  tempRow.innerHTML = temp
}



document.addEventListener('DOMContentLoaded', function() {
 // add the event listener
 let cityForm = document.getElementById("cityForm");
 cityForm.addEventListener("submit", handleFormSubmit)
// $("#cityForm").on("submit", callBack)
 
})




