const apiKey="681fa27a531b9b235a2dec37ecef0479"
const apiUrl="api.openweathermap.org/data/2.5/weather?units=metric&q=Berlin";
const searchInput = document.querySelector("weather__input")
const searchBtn = document.querySelector("weather__button")
async function checkWeather(){
    const response = await fetch(apiUrl + '&appid=${apiKey}');
    let data = await response.json();
    console.log(data);  
    document.querySelector("weather_city").innerHTML = data.name;
    document.querySelector("weather_temp").innerHTML = Math.round(data.main.temp) + "&#176;C"
    document.querySelector("weather__humidity-perecentage").innerHTML = data.main.humidity + "%"
    document.querySelector("weather__wind-speed").innerHTML = data.wind.speed + "km/h"
}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchInput.value);
})
