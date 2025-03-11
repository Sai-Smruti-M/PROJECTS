document.getElementById('getWeatherBtn').addEventListener('click', function() {
    var city = document.getElementById('cityInput').value;
    var apiKey = 'df88268329a3d233e08e1a633b3d3a77'; // Replace with your OpenWeatherMap API key
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            var weatherDataDiv = document.getElementById('weatherData');
            weatherDataDiv.innerHTML = `
                <h3>Weather in ${data.name}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Humidity: ${data.main.humidity} %</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            var weatherDataDiv = document.getElementById('weatherData');
            weatherDataDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
        });
});
