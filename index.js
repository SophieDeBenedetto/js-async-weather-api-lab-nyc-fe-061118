const API_KEY  = "5357d0ee7dd6ec614e764228b9249e29"
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`

function handleFormSubmit(event) {
 debugger;
 // next I need to send a web request to this URL: api.openweathermap.org/data/2.5/weather?q=London
 // I need to substitute "London" for whatever city the user filled out. 
}



document.addEventListener('DOMContentLoaded', function() {
 // add the event listener
 let cityForm = document.getElementById("cityForm");
 cityForm.addEventListener("submit", handleFormSubmit)
// $("#cityForm").on("submit", callBack)
 
})







