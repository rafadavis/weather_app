import {drawWeather} from "./weather.js";
import {drawClothes} from "./clothes.js";
//import {key} from "../main.js";
export function request(key){
    var zipCode = document.querySelector('input').value;
    // var zipCode = 11226; // only when testing
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


