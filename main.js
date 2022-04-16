const btn = document.querySelector('button');

function drawWeather( d ) {
    console.log(d);
    var desc = document.getElementById('description');
    var temp = document.getElementById('temp');
    var loc = document.getElementById('location');

    desc.textContent += d.weather[0].description;
    temp.textContent += d.main.temp;
    loc.textContent += d.name;
}

function request(){
    var zipCode = document.querySelector('input').value;
    var key = 'bc64d8909608b860393fbdaade941faf';
    fetch('http://api.openweathermap.org/data/2.5/weather?zip='
        + zipCode + '&appid=' + key)
    .then(function(resp) {return resp.json() })
    .then(function(data) {
        drawWeather(data);
    })
    .catch(function() {
    });
}

btn.addEventListener('click', function() {
    request();
})

