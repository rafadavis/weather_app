import {drawWeather} from "./weather.js";
import {drawClothes} from "./clothes.js";

const fetch = require('node-fetch');
const key = process.env.SECRET_API_KEY;

//import {key} from "../main.js";
export function draw(){
    var zip = document.querySelector('input').value;
    // var zipCode = 11226; // only when testing
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}
        &appid=${key}`)
    .then(function(resp) {return resp.json() })
    .then(function(data) {
        drawWeather(data);
        drawClothes(data);
    })
    .catch(function() {
    });
}

