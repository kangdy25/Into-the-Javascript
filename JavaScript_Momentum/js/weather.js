const API_KEY = "6821e1fceef6d04d5eecaf57c502e99c";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            city.innerText = `City: ${data.name}`;
            weather.innerText = `Weather: ${data.weather[0].main} / ${Math.round(data.main.temp)}℃`;
    });
}
function onGeoError() {
    alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);