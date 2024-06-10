let cities = JSON.parse(localStorage.getItem('cities')) || [];
const cityNameEl = $('#cityName');
const apiKey = '5bc593d5b6a903eb1bcff74b89d2892a';
//server side api function for weather by city
function getWeather(cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    fetch(apiUrl).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
    })
}

function getForecast(cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`
    fetch(apiUrl).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
        const forecasts = data.list || [];

        for (let i = 0; i < forecasts.length; i = i + 8) {
            const forecast = forecasts[i];
            console.log(forecast);
        }
    })
}

function createCityCard(task) {
    const cityCardEl = $('<div class="task card mb-3 p-3">');
    const cityNameEl = $('<h3').text(task.cityName);

    $('#city-history').append(cityCardEl);
    cityCardEl.append(cityNameEl);
}

//function to add input data and convert it to an array in local storage
function addCitySearch(event) {
    event.preventDefault();
    if (!cities) {
        cities = [];
    }

    let city = {
        cityName: $('#cityName').val().trim(),
    }

    cities.push(city);

    localStorage.setItem('cities', JSON.stringify(cities));


}
$("#add-city").on('submit', addCitySearch);

getWeather('lexington');
getForecast('lexington');
searchCity('lexington');



//event delegation