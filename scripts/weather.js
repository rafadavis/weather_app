import {toCelsius, toFahrenheit} from "./conversions.js";
export function drawWeather( d ) {
    var desc = document.getElementById('description');
    var temp = document.getElementById('temp');
    temp.className = '';
    var loc = document.getElementById('location');

    loc.textContent = d.name;
    var cTemp = Math.round(toCelsius(d.main.temp));
    var fTemp = Math.round(toFahrenheit(d.main.temp));
    temp.textContent = `Temperature: ${cTemp}°C / ${fTemp}°F`
    if (fTemp > 70) {
        temp.className = 'hot';
    } else if (fTemp < 50) {
        temp.className = 'cold';
    }
    desc.textContent = d.weather[0].description[0].toUpperCase() 
        + d.weather[0].description.substring(1); //changing case of 1st letter
}
