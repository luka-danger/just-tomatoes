import tomatoImage2 from './images/tomatoes2.jpg';

function makeContactPage() {
    // Select the wrapper element
    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = '';

    // Create Content Div
    const contactContainer = document.createElement('div');
    contactContainer.className = 'contact-container';
    contentContainer.appendChild(contactContainer);

    // Make Announcement Div
    const announcementContainer = document.createElement('div');
    announcementContainer.className = 'contact-announcement-container';
    contactContainer.appendChild(announcementContainer)

    const callUs = document.createElement('h1');
    callUs.className = 'contact-announcement';
    callUs.textContent = 'Phone: +48 555 555 555';
    announcementContainer.appendChild(callUs);

    const emailUs = document.createElement('h1');
    emailUs.className = 'contact-announcement';
    emailUs.textContent = 'For any other inquiries, email us at nate@justtomatoes.com '
    announcementContainer.appendChild(emailUs);

    // Add Image
    const tomatoImage = document.createElement('img');
    tomatoImage.src = tomatoImage2;
    tomatoImage.className = 'tomato-image';
    announcementContainer.appendChild(tomatoImage);
 
}

// Export function 
export { makeContactPage };