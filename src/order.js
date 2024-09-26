function makeOrderOnline() {
    // Select the wrapper element
    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = '';

    // Create Content Div
    const contactContainer = document.createElement('div');
    contactContainer.className = 'contact-container';
    contentContainer.appendChild(contactContainer);

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

// Export function 
export { makeOrderOnline };