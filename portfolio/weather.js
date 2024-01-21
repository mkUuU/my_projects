async function checkWeather(city) {
    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").textContent = data.main.humidity + "%";
        document.querySelector(".wind").textContent = data.speed.wind + " km/h";
      } else {
        console.error("API call failed");
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  searchBtn.addEventListener("click", () => {
    const searchBoxValue = searchBox.value.trim();
    if (searchBoxValue.length > 0) {
      checkWeather(searchBoxValue);
    } else {
      console.error("Please enter a city name");
    }
  });