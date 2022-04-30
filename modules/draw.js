import {drawWeather} from "./weather.js";
import {drawClothes} from "./clothes.js";
//import {key} from "../main.js";
export function draw(){
    var zipCode = document.querySelector('input').value;
    // var zipCode = 11226; // only when testing
    fetch(`/.netlify/functions/request?zip=${zipCode}`)
    .then(function(resp) {return resp.json() })
    .then(function(data) {
        drawWeather(data);
        drawClothes(data);
    })
    .catch(function() {
    });
}

