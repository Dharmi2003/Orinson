"use strict";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
const appKey = `&appid=3754dfab78a3f7bc84bd50e4ddcb90b1`;

const searchField = document.querySelector(".searchArea input");
const searchBtn = document.querySelector(".searchArea button");
const weatherIcon = document.querySelector(".Weather-Icon");


function city() {
	const inputName = document.querySelector("#impTXT");
	const city = `&q=${inputName.value}`;
	checkWeather(city);
}

// document.querySelector(".WeatherDisplay").style.display = "block";


async function checkWeather(city) {
	const response = await fetch(apiURL + appKey + city);
	var data = await response.json();
	console.log(data);

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

	if (data.weather[0].main == "Clouds") {
		weatherIcon.src = "./Images/Cloudy.png";
	}

	if (data.weather[0].main == "Mist") {
		weatherIcon.src = "./Images/Mist.png";
	}

	if (data.weather[0].main == "Rain") {
		weatherIcon.src = "./Images/Rain.png";
	}

	if (data.weather[0].main == "Drizzle") {
		weatherIcon.src = "./Images/Drizzle.png";
	}

	if (data.weather[0].main == "Clear") {
		weatherIcon.src = "./Images/Clear.png";
	}

	if (data.weather[0].main == "Snow") {
		weatherIcon.src = "./Images/Snow.png";
	}

	if (data.weather[0].main == "Haze") {
		weatherIcon.src = "./Images/Haze.png";
	}

	document.querySelector(".WeatherDisplay").style.display = "block";
};

searchBtn.addEventListener("click", city); // addEventlistener e funcion call korle () lage na


// const input = document.getElementById("impTXT");
searchField.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		city();
	}
});