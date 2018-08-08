const API_KEY  = "5357d0ee7dd6ec614e764228b9249e29"
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`

function handleFormSubmit(event) {
 alert("thanks for submitting the form")
}



document.addEventListener('DOMContentLoaded', function() {
 // add the event listener
 let cityForm = document.getElementById("cityForm");
 cityForm.addEventListener("submit", handleFormSubmit)
// $("#cityForm").on("submit", callBack)
 
})







