const cityInput = document.getElementById("city");
const submitButton = document.getElementById("submit");
const weatherDiv = document.getElementById("weather");

submitButton.addEventListener("click", function () {
  const cityName = cityInput.value;
  const apiKey = "a40ac0ba077c537659f2a82221e61be5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  // Get weather data for the city name.
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      // Display the weather data in the weather div.
      let d=data.main.temp
      let degree=(d-273.15).toFixed(1)
      
      weatherDiv.innerHTML = `
        <h2>Weather for ${data.name}</h2>
        <p>Temp: ${degree}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Description: ${data.weather[0].description}</p>
      `;

      const weatherDescription = data.weather[0].description.toLowerCase();
      let bg=document.querySelector(".container")

      if (weatherDescription.includes("rain")) {
        bg.style.background= "url(./img/rainy-day.jpg)"
        bg.style.backgroundSize= "cover"
      
        
      } else if (weatherDescription.includes("sun")) {
        bg.style.background= "url(./img/sunny-day.webp)"
        bg.style.backgroundSize= "cover"
      
        
      }else if (weatherDescription.includes("mist")) {
        bg.style.background= "url(./img/mist.jpg)"
        bg.style.backgroundSize= "cover"
      
        
      } else if (weatherDescription.includes("hot")) {
        bg.style.background= "url(./img/sunny-day.webp)"
        bg.style.backgroundSize= "cover"
  
        
      } else if (weatherDescription.includes("winter")) {
        bg.style.background= "url(./img/snowfall.jpg)"
        bg.style.backgroundSize= "cover"
        
        
      } else if (weatherDescription.includes("clouds")) {
        bg.style.background= "url(./img/thunder-strom.jpg)"
        bg.style.backgroundSize= "cover"
        
        
      } else {
        console.log("Weather conditions are not explicitly mentioned.");
      }
    });
});