const btn = document.querySelector('button');

function drawWeather( d ) {
    console.log(d);
    var desc = document.getElementById('description');
    var temp = document.getElementById('temp');
    var loc = document.getElementById('location');

    loc.textContent += d.name;
    cTemp = Math.round(toCelsius(d.main.temp));
    fTemp = Math.round(toFahrenheit(d.main.temp));
    temp.textContent += `Temperature: ${cTemp}°C /
        ${fTemp}°F`
    desc.textContent += d.weather[0].description[0].toUpperCase() 
        + d.weather[0].description.substring(1); //changing case of 1st letter
}

function request(){
    var zipCode = document.querySelector('input').value;
    var key = 'bc64d8909608b860393fbdaade941faf';
    fetch('http://api.openweathermap.org/data/2.5/weather?zip='
        + zipCode + '&appid=' + key)
    .then(function(resp) {return resp.json() })
    .then(function(data) {
        drawWeather(data);
        drawClothes(data);
    })
    .catch(function() {
    });
}

btn.addEventListener('click', function() {
    request();
})

function toCelsius( k ) {
    let c = k - 273.15;
    return c
}

function toFahrenheit( k ) {
    let f = 1.8*(k - 273) + 32;
    return f;
}

function drawClothes( d ) {
    var f = toFahrenheit(d.main.temp)
    var clothes = document.getElementById("clothes");
    if (f < 30) {
        var dress = "dress like it's below 30"
    } else if (f < 50) {
        var dress = "dress like it's between 30 and 50"
    } else if (f < 70) {
        var dress = "dress like it's btw 50 and 70"
    } else {
        var dress = "more than 70"
    }
    console.log(dress);
    clothes.textContent += dress;
}


