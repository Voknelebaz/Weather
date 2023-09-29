const apiKey = "681fa27a531b9b235a2dec37ecef0479"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".weather__input")
const searchBtn = document.querySelector(".weather__button")
const weather__icon = document.querySelector(".weather__icon")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".weather__error").style.display = "block"
        document.querySelector(".weather__wrapper").style.display = "none"
    } else {
        let data = await response.json();
        console.log(data);
        document.querySelector(".weather_city").innerHTML = data.name
        document.querySelector(".weather_temp").innerHTML = data.main.temp + " °C"
        document.querySelector(".weather__humidity-perecentage").innerHTML = data.main.humidity + "%"
        document.querySelector(".weather__wind-speed").innerHTML = data.wind.speed + "km/h"
        if (data.weather[0].main == "Clear") {
            weather__icon.src = "./assets/images/clear.png"
        } else if (data.weather[0].main == "Clouds") {
            weather__icon.src = "./assets/images/clouds.png"
        } else if (data.weather[0].main == "Drizzle") {
            weather__icon.src = "./assets/images/drizzle.png"
        } else if (data.weather[0].main == "Rain") {
            weather__icon.src = "./assets/images/rain.png"
        } else if (data.weather[0].main == "Mist") {
            weather__icon.src = "./assets/images/mist.png"
        } else if (data.weather[0].main == "Snow") {
            weather__icon.src = "./assets/images/snow.png"
        } else if (data.weather[0].main == "Wind") {
            weather__icon.src = "./assets/images/wind.png"
        }
        document.querySelector(".weather__wrapper").style.display = "block"
        document.querySelector(".weather__error").style.display="none"
    }

}


searchBtn.addEventListener('click', () => {
    checkWeather(searchInput.value);
})