const btn = document.querySelector('button');
function test() {

    const para = document.createElement('p');
    const div = document.querySelector('div');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    const input = document.querySelector('input');
    const zip = input.value;

    if (zip === "11377") {
	para.textContent = "My old house";
    } else if (zip === "11226") {
	para.textContent = "My new place";
    } else {
	para.textContent = "I don't recognize this place";
    }
    div.appendChild(para);
}

btn.addEventListener('click', test);

