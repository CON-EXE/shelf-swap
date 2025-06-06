'use strict';

const { log } = console;

const clock = document.querySelector('.clock');
const battLevel = document.querySelector('.batt-level');

const login = document.querySelector('.login')
const home = document.querySelector('.home');
const search = document.querySelector('.search');
const profile = document.querySelector('.profile');
const swaps = document.querySelector('.swaps');
const settings = document.querySelector('.settings');
const listing = document.querySelector('.listing');
const footer = document.querySelector('footer');

const loginButton = document.querySelector('.login-button');
const swapDemo = document.querySelector('.swap-demo');
const navButtons = document.querySelectorAll('nav a');
const mainSections = document.querySelectorAll('main section');

let current = [];

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

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('id');
        
        mainSections.forEach(div => {
            div.classList.remove('active');
        });

        const targetDiv = document.getElementById(targetId);
        targetDiv.classList.add('active');
    });
});

swapDemo.addEventListener('click', () => {
    listing.classList.add('active');
    swaps.classList.remove('active');
});

loginButton.addEventListener('click', () => {
    login.classList.remove('active');
    footer.classList.remove('hide');
    home.classList.add('active');
});