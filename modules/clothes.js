import {toFahrenheit} from "./conversions.js";
import {downhillToDowntown} from "./dtd.js";

export function drawClothes( d ) {
    const f = toFahrenheit(d.main.temp)
    console.log(f);
    const clothes = document.getElementById("clothes");
    clothes.textContent += "Clothes text content:";
    const dress = downhillToDowntown(f); 
    console.log(dress);
    clothes.textContent += dress;
}
