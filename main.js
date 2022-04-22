import {request} from "./modules/request.js";

const key = config.SECRET_API_KEY;
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    request(key);
})


