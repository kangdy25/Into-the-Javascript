const clock = document.querySelector("#clock");

function getTime() {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const second = String(time.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${second}`;
}
getTime();
setInterval(getTime, 1000);
// setTimeout(sayHello, 5000);