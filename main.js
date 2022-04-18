import {downhillToDowntown, link} from "./modules/dtd.js";
import {drawClothes} from "./modules/clothes.js";
import {request} from "./modules/request.js";

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    request();
})


