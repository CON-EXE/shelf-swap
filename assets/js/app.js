'use strict';

const clock = document.querySelector('.clock');
const battLevel = document.querySelector('.batt-level');

function setClock(time) {
    let hour = time.getHours().toString().padStart(2, '0');
    let minute = time.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minute}`;
}

setInterval(() => {
    const now = new Date();
    clock.innerText = setClock(now);
}, 1000);

window.addEventListener('load', () => {
    const now = new Date();
    clock.innerText = setClock(now);
});

navigator.getBattery().then(function(battery) {
    battLevel.innerText = `${battery.level * 100}%`;
});