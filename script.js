const cityInput = document.getElementById("city");
const submitButton = document.getElementById("submit");
const weatherDiv = document.getElementById("weather");

submitButton.addEventListener("click", function() {
  const cityName = cityInput.value;
  const apiKey = "a40ac0ba077c537659f2a82221e61be5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`;
  // Get weather data for the city name.
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Display the weather data in the weather div.
      weatherDiv.innerHTML = `
        <h2>Weather for ${data.name}</h2>
        <p>Temp: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Description: ${data.weather[0].description}</p>
      `;
    });
});
