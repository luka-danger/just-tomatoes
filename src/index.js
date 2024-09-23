import "./style.css";
import { makeTitle, makeHomepage } from './homepage'
import { makeOrderOnline } from "./order";

document.getElementById('home-btn').addEventListener('click', function () {
    makeTitle();
    makeHomepage();
});


document.getElementById('online-btn').addEventListener('click', function () {
    makeOrderOnline();
});



