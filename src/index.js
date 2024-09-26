import "./style.css";
import { makeHomepage } from './homepage'
import { makeOrderOnline } from "./order";


document.getElementById('home-btn').addEventListener('click', function () {
    makeHomepage();
});

document.getElementById('menu-btn').addEventListener('click', function () {
    makeOrderOnline();
});

document.getElementById('contact-btn').addEventListener('click', function () {
    makeOrderOnline();
});


document.getElementById('online-btn').addEventListener('click', function () {
    makeOrderOnline();
});



