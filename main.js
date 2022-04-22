import {request} from "./modules/request.js";

const key = config.SECRET_API_KEY;
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    request(key);
});

zipcode.addEventListener("keyup", function(event) {
    // function to allow Enter key to trigger the function
    if (event.keyCode === 13) {
	request(key);
    }
})


