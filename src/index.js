import "./style.css";
import { makeHomepage } from './homepage'
import { makeOrderOnline } from "./order";
import { makeContactPage } from "./contact";
import { makeHoursPage } from "./hours";


document.getElementById('home-btn').addEventListener('click', function () {
    makeHomepage();
});

document.getElementById('menu-btn').addEventListener('click', function () {
    // FIX ME 
});

document.getElementById('hours-btn').addEventListener('click', function () {
    makeHoursPage();
});

document.getElementById('contact-btn').addEventListener('click', function () {
    makeContactPage();
});


document.getElementById('online-btn').addEventListener('click', function () {
    makeOrderOnline();
});



