import "./style.css";
import { makeTitle, makeHomepage } from './homepage'


function makeOrderOnline() {
    // Select the wrapper element
    const wrapper = document.querySelector('.wrapper');

    // Create Content Div
    const contactContainer = document.createElement('div');
    contactContainer.className = 'contact-container';
    wrapper.appendChild(contactContainer);

    // Make Announcement Div
    const announcementContainer = document.createElement('div');
    announcementContainer.className = 'announcement-container';
    contactContainer.appendChild(announcementContainer)

    // Make Announcement
    const orderAnnouncement = document.createElement('h1');
    orderAnnouncement.className = 'order-announcement';
    orderAnnouncement.textContent = 'Online Order Feature Available Soon!'
    announcementContainer.appendChild(orderAnnouncement);
}

document.getElementById('home-btn').addEventListener('click', function () {
    makeTitle();
    makeHomepage();
});


document.getElementById('online-btn').addEventListener('click', function () {
    makeOrderOnline();
});



