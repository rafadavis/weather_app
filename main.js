import {draw} from "/modules/draw.js";

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    request();
});

zipcode.addEventListener("keyup", function(event) {
    // function to allow Enter key to trigger the function
    if (event.keyCode === 13) {
	draw();
    }
})


