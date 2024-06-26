import WEATHER from "./script.js";

let weather = {
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="+ 
      city + "&units=imperial&appid=" 
      + WEATHER
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found and check if the word is spell correctly.");
          throw new Error("No weather found and check if the word is spell correctly.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".image-weather").innerText = description;
    document.querySelector(".temperature").innerText = Math.ceil(temp) + "°F";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".Wind-speed").innerText =
      "Wind speed: " + speed + "mph";
  },
  search: function () {
    weather.fetchWeather(document.querySelector(".input-Weather").value)
  },
};
document
  .querySelector(".input-Weather")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

weather.fetchWeather("Colorado Springs");
