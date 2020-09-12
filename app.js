"use strict";
searchButton.addEventListener('click', searchWeather);
function searchWeather() {
    var cityName = searchCity.value;
    console.log ('valor del input es:', searchCity.value);
    if (cityName.trim().length === 0) {
        return alert ('Valor no válido');
    }
    var requestWeatherService = new XMLHttpRequest();
    var apiKey ='4e8756790c0fa6ba29e48b89e8304bc3';
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={apiKey}`;
    var requestMethod = 'GET';
    requestWeatherService.open (requestMethod, url);
    requestWeatherService.send();
    requestWeatherService.onreadystatechange(function () {
        if (requestWeatherService.state === XMLHttpRequest.DONE && requestWeatherService.status === 200) {

        }else if (requestWeatherService.state === XMLHttpRequest.DONE && requestWeatherService.status === 200){
            alert('Algo salió mal')
        }
    });
}


