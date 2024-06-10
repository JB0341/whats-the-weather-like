const APIKey = '5bc593d5b6a903eb1bcff74b89d2892a';

function getLoction(cityName){
    const APIUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${APIKey}'
    fetch(APIUrl).then(function (response){
        return response.json()
    }).then(function(data){
        const lat = data[0].lat;
        const lon = data[0].lon;
        getWeather(lat, lon)
    }) 
}

function getWeather(lat, lon){
    const APIUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${APIkey}'
    fetch(APIUrl).then(function (response){
        return response.json()
    }).then(function(data){
        console.log(data)
    })
}
getLocation('lexington');