function makeOrderOnline() {
    // Select the wrapper element
    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = '';

    // Create Content Div
    const orderContainer = document.createElement('div');
    orderContainer.className = 'order-container';
    contentContainer.appendChild(orderContainer);

    // Make Announcement Div
    const announcementContainer = document.createElement('div');
    announcementContainer.className = 'announcement-container';
    orderContainer.appendChild(announcementContainer)

    // Make Announcement
    const orderAnnouncement = document.createElement('h1');
    orderAnnouncement.className = 'order-announcement';
    orderAnnouncement.textContent = 'Online Order Feature Available Soon!'
    announcementContainer.appendChild(orderAnnouncement);
}

// Export function 
export { makeOrderOnline };