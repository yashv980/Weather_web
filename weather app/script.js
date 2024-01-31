const inputbox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city) {
    const api_key = "28553620690e2c511fdec707e915beaa";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = await fetch(`${url}`).then(response =>
        response.json());

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHtml = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}km/hr`;

    switch (weather_data.weather[0].main) {
        case 'cloud':
            weather_img.src = "/Images/cloud(1).png";
            break;
        case 'clear':
            weather_img.src = "/Images/clear(1).png";
            break;
        case 'rain':
            weather_img.src = "/Images/rain(1).png";
            break;
        case 'mist':
            weather_img.src = "/Images/mist(1).png";
            break;
        case 'snow':
            weather_img.src = "/Images/snow(1).png";
            break;

        default:
            break;
    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(inputbox.value);
});
