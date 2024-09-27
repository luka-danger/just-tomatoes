import tomatoImage2 from './images/tomatoes2.jpg';

function makeHoursPage() {
    // Select the wrapper element
    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = '';

    // Create Content Div
    const contactContainer = document.createElement('div');
    contactContainer.className = 'contact-container';
    contentContainer.appendChild(contactContainer);

    // Make Announcement Div
    const announcementContainer = document.createElement('div');
    announcementContainer.className = 'hours-announcement-container';
    contactContainer.appendChild(announcementContainer)

    const hours = document.createElement('h1');
    hours.className = 'hours';
    hours.textContent = 'Open Tuesday-Sunday from 11am - 9pm';
    announcementContainer.appendChild(hours);

    const hours2 = document.createElement('h1');
    hours2.className = 'hours';
    hours2.textContent = 'Closed Mondays';
    announcementContainer.appendChild(hours2);

    // Add Image
    const tomatoImage = document.createElement('img');
    tomatoImage.src = tomatoImage2;
    tomatoImage.className = 'tomato-image';
    announcementContainer.appendChild(tomatoImage);
 
}

// Export function 
export { makeHoursPage };