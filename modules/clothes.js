import {toFahrenheit} from "./conversions.js";
import {downhillToDowntown, dtdLink} from "./dtd.js";

export function drawClothes( d ) {
    const f = toFahrenheit(d.main.temp)
    const main = document.getElementById("main");
    const clothes = document.getElementById("clothes");
    clothes.className = "on";
    const dress = downhillToDowntown(f); 
    clothes.textContent = dress;
    const para = document.createElement('p');
    para.textContent = 'Source: ';
    const a = document.createElement('a');
    a.href = dtdLink;
    a.textContent = 'Downhill to Downtown';
    para.appendChild(a);
    clothes.appendChild(para);
    main.appendChild(clothes);
}
