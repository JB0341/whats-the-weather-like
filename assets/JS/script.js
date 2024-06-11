let cities = JSON.parse(localStorage.getItem("cities")) || [];
const cityNameEl = $('#cityName');
const apiKey = '5bc593d5b6a903eb1bcff74b89d2892a';
//server side api function for weather by city
function getWeather(cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`
    fetch(apiUrl).then(function (response) {
        return response.json()
    }).then(function (data) {
        
        console.log(data)
        const temp = data.main.temp;
        const wind = data.wind.speed;
        const humidity = data.main.humidity;
        const todaysForecast = `
        <div class="m-3 p-3">
            <h3 class="m-2 p-2">${cityName}</h3>
            <p>Temp: ${temp}°F</p>
            <p>Wind: ${wind}</p>
            <p>Humidity: ${humidity}</p>
        </div>
        `
        $('#weatherDisplay').append(todaysForecast);

    })
} 

function getForecast(cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`
    fetch(apiUrl).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
        const forecasts = data.list || [];

        for (let i = 0; i < forecasts.length; i = i + 8) {
            const forecast = forecasts[i];
            console.log(forecast);

            const temp = forecast.main.temp;
            const wind = forecast.wind.speed;
            const humidity = forecast.main.humidity;
            const futureCast = `
            <div class="m-3 p-3">
                <h3 class="m-2 p-2">${cityName}</h3>
                <p>Temp: ${temp}°F</p>
                <p>Wind: ${wind}</p>
                <p>Humidity: ${humidity}</p>
            </div>
            `
            $('#forecastDisplay').append(futureCast);
        }
    })
}

//creating a card to append to the search history
function createCityCard(task) {
    const cityCardEl = $('<div class="task card mb-3 p-3">');
    const cityNameEl = $('<div>').text(task.cityName);

    $('#cityHistory').append(cityCardEl);
    cityCardEl.append(cityNameEl);
}

function renderCities() {
    for (let city of cities) {
        createCityCard(city);
    }
}
//function to add input data and convert it to an array in local storage
function addCityList(event) {
    event.preventDefault();

    if (!cities) {
        cities = [];
    }

    let city = {
        cityName: $('#cityName').val().trim(),
    }

    cities.push(city);

    localStorage.setItem('cities', JSON.stringify(cities));

    const { cityName } = city;

    getWeather(cityName);
    getForecast(cityName);

}

$(document).ready(function () {
    renderCities();
})
$("#add-city").on('submit', addCityList);
