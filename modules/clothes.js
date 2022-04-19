import {toFahrenheit} from "./conversions.js";
import {downhillToDowntown} from "./dtd.js";

export function drawClothes( d ) {
    const f = toFahrenheit(d.main.temp)
    const clothes = document.getElementById("clothes");
    const dress = downhillToDowntown(f); 
    clothes.textContent += dress;
}
