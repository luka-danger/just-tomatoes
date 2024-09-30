function makeMenuPage() {
    // Clear contents 
    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = '';

    // Make menu container for background
    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';
    contentContainer.appendChild(menuContainer);

    // Create div to append menu items
    const menuItems = document.createElement('div');
    menuItems.className = 'menu-items';
    menuContainer.appendChild(menuItems)

    // Create main header
    const menuHeader = document.createElement('h1');
    menuHeader.className = 'menu-header';
    menuHeader.textContent = 'Menu';
    menuItems.appendChild(menuHeader);

    // Create header for Starters
    const appsHeader = document.createElement('h1');
    appsHeader.textContent = 'Starters';
    menuItems.appendChild(appsHeader);

    // Create header for Soups and Salads
    const soupsHeader = document.createElement('h1');
    soupsHeader.textContent = 'Soups and Salads';
    menuItems.appendChild(soupsHeader);

    // Create header for Entrees
    const entreeHeader = document.createElement('h1');
    entreeHeader.textContent = 'Entrees';
    menuItems.appendChild(entreeHeader);

    // Create header for Sides
    const sidesHeader = document.createElement('h1');
    sidesHeader.textContent = 'Sides';
    menuItems.appendChild(sidesHeader);

    // First Starter 
    const apps1 = document.createElement('p');
    apps1.className = 'menu-item'
    apps1.textContent = 'Fried Tomatoes $19';
    appsHeader.appendChild(apps1);

    // First Starter Description 
    const apps1Description = document.createElement('p');
    apps1Description.className = 'item-description'
    apps1Description.textContent = '3 fried tomatoes, served with a side of tomato ketchup';
    apps1.appendChild(apps1Description);

    // Second Starter 
    const apps2 = document.createElement('p');
    apps2.className = 'menu-item'
    apps2.textContent = 'Cherry Tomatoes $14';
    appsHeader.appendChild(apps2);

    // Second Starter Description 
    const apps2Description = document.createElement('p');
    apps2Description.className = 'item-description'
    apps2Description.textContent = 'A bowl of cherry tomatoes, served with a side of tomato ketchup';
    apps2.appendChild(apps2Description);

    // Soup
    const soups = document.createElement('p');
    soups.className = 'menu-item'
    soups.textContent = 'Tomato Soup $17';
    soupsHeader.appendChild(soups);

    // Soup Description 
    const soupsDescription = document.createElement('p');
    soupsDescription.className = 'item-description'
    soupsDescription.textContent = 'A bowl of tomato soup, served with a side of tomato ketchup';
    soups.appendChild(soupsDescription);

    // Salad 
    const salads = document.createElement('p');
    salads.className = 'menu-item'
    salads.textContent = 'Tomato Salad $14';
    soupsHeader.appendChild(salads);

    // Salad Description 
    const saladsDescription = document.createElement('p');
    saladsDescription.className = 'item-description'
    saladsDescription.textContent = 'A salad made of diced tomatoes, topped with tomato ketchup';
    salads.appendChild(saladsDescription);

    // First Entree
    const entree1 = document.createElement('p');
    entree1.className = 'menu-item'
    entree1.textContent = 'Tomato Stuffed Tomatoes $37';
    entreeHeader.appendChild(entree1);

    // First Entree Description 
    const entree1Description = document.createElement('p');
    entree1Description.className = 'item-description'
    entree1Description.textContent = '3 Hot House Tomatoes stuff with diced Roma tomatoes. Served with a side of tomato ketchup';
    entreeHeader.appendChild(entree1Description);

    // Second Entree
    const entree2 = document.createElement('p');
    entree2.className = 'menu-item'
    entree2.textContent = 'Heirloom Tomato Pasta $34';
    entreeHeader.appendChild(entree2);

    // Second Entree Description 
    const entree2Description = document.createElement('p');
    entree2Description.className = 'item-description'
    entree2Description.textContent = 'Heirloom Tomatoes served over Angel Hair Pasta**. Topped with a tomato based marinara';
    entree2.appendChild(entree2Description);

    // Second Entree Asterik
    const entree2Asterik = document.createElement('p');
    entree2Asterik.className = 'asterik'
    entree2Asterik.textContent = '** We are currently out of Angel Hair Pasta';
    entree2Description.appendChild(entree2Asterik);

    // Side
    const sideItem = document.createElement('p');
    sideItem.className = 'menu-item'
    sideItem.textContent = 'Side of Tomato Ketchup $4';
    sidesHeader.appendChild(sideItem);

    // Gratuity Note
    const gratuityNote = document.createElement('p');
    entree2Asterik.className = 'gratuity-note'
    gratuityNote.textContent = 'A 30% Service Charge Is Automatically Added To All Tables';
    menuItems.appendChild(gratuityNote);

}

export { makeMenuPage }