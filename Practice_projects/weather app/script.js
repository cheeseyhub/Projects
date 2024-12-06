
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
console.log(weatherIcon);

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  if (response.status == "404") {
    document.querySelector(".error").style.display = " block";
  } else {
    console.log(data);
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML =
      Math.floor(data.main.humidity) + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    data.weather[0].main == "Clear"
      ? (weatherIcon.src = "./images/clear.png")
      : data.weather[0].main == "Snow"
      ? (weatherIcon.src = "./images/snow.png")
      : data.weather[0].main == "Smoke"
      ? (weatherIcon.src = "./images/mist.png")
      : data.weather[0].main == "Rain"
      ? (weatherIcon.src = "./images/rain.png")
      : data.weather[0].main == "Drizzle"
      ? (weatherIcon.src = "./images/drizzle.png")
      : (weatherIcon.src = "./images/clouds.png");

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = " none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
