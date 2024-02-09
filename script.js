let url = "https://api.weatherapi.com/v1/current.json?key=f39f25cb175c465884c180544240902&q="
let btn = document.querySelector("button");
let city = document.querySelector(".city");
let countryDisplay = document.querySelector(".country");
let temp=document.querySelector(".temp");
let feelsLike=document.querySelector(".feels-like")
let humidityDisplay=document.querySelector(".humidity")
let windSpeed=document.querySelector(".wind");
let weatherIcon=document.querySelector(".weather-icon");


btn.addEventListener("click", async () => {
    let city = document.querySelector("input").value;
    console.log(city);
    let cityWeather = await getweather(city);
    console.log(cityWeather);
    show(cityWeather);

})

function show(cityWeather) {
    const { location: { country, name }, current: { feelslike_c, humidity, wind_kph, temp_c, condition: { text, icon } } } = cityWeather;
    city.innerHTML = `${name},`
    countryDisplay.innerHTML = `${country}`;
    temp.innerHTML=`${temp_c}°C`
    feelsLike.innerHTML=`Feels like: ${feelslike_c}°C`;
    humidityDisplay.innerHTML=`Humidity ${humidity}%`;
    windSpeed.innerHTML=`Wind Speed ${wind_kph}kph`
    weatherIcon.src = `https:${icon}`;
}


async function getweather(city) {
    try {
        let res = await axios.get(url + city)
        return res.data;
    } catch (e) {
        return "Not Found"
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    const defaultCity = "Chandigarh"; 
    try {
        const cityWeather = await getweather(defaultCity);
        show(cityWeather);
    } catch (error) {
        console.error(error);
    }
});
