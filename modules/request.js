import {drawWeather} from "./weather.js";
import {drawClothes} from "./clothes.js";
export function request(){
    //var zipCode = document.querySelector('input').value;
    var zipCode = 11226;
    var key = 'bc64d8909608b860393fbdaade941faf';
    fetch('http://api.openweathermap.org/data/2.5/weather?zip='
        + zipCode + '&appid=' + key)
    .then(function(resp) {return resp.json() })
    .then(function(data) {
        drawWeather(data);
        drawClothes(data);
    })
    .catch(function() {
    });
}


