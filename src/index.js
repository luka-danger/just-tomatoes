import "./style.css";
import tomatoImage1 from './images/tomatoes3.jpg';
import tomatoImage2 from './images/tomatoes6.png';

function makeHomepage() {
    // Create content div 
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';

    // Create content text div
    const textDiv = document.createElement('div');
    textDiv.className = 'content-text';
    textDiv.textContent = "Welcome to Just Tomatoes! Where we serve, you guessed it - just tomatoes.\
    Our tomatoes are the freshest tomatoes in town. And the next town. Our chefs specialize in\
    tomatoes of every kind. Whole tomatoes, chopped tomatoes, fried tomatoes, sauteed tomatoes. Try our\
    award winning ketchup, served with every tomato entree. Don't like tomatoes? Well, you've\
    never tried our tomatoes. Still don't like tomatoes? Then try our sister store - just peaches.\
    Where everything on the menu is...you guessed it again - just peaches!";

    // Create order button div 
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'order-button';

    // Create button and a link
    const orderLink = document.createElement('a');
    orderLink.href = '#';

    const orderButton = document.createElement('button');
    orderButton.id = 'order-btn';
    orderButton.textContent = 'Order Now!';

    // Append button to link and link to button div
    orderLink.appendChild(orderButton);
    buttonDiv.appendChild(orderLink);

    // Create left-right div
    const leftRightDiv = document.createElement('div');
    leftRightDiv.className = 'left-right';

    // Create left div
    const leftDiv = document.createElement('div');
    leftDiv.className = 'left';

    const leftImageDiv = document.createElement('div');
    leftImageDiv.className = 'content-image';
    const leftImage = document.createElement('img');
    leftImage.src = tomatoImage1;
    leftImage.id = 'content-image-left';
    leftImageDiv.appendChild(leftImage);

    const leftImageText = document.createElement('div');
    leftImageText.className = 'content-image-text';
    leftImageText.textContent = "Our tomatoes are hand-grown by this guy smoking a cigarette.";

    // Append left content
    leftDiv.appendChild(leftImageDiv);
    leftDiv.appendChild(leftImageText);

    // Create right div
    const rightDiv = document.createElement('div');
    rightDiv.className = 'right';

    const rightImageDiv = document.createElement('div');
    rightImageDiv.className = 'content-image';
    const rightImage = document.createElement('img');
    rightImage.src = tomatoImage2;
    rightImage.id = 'content-image-right';
    rightImageDiv.appendChild(rightImage);

    const rightImageText = document.createElement('div');
    rightImageText.className = 'content-image-text';
    rightImageText.textContent = "Here is a woman holding our tomatoes to show how great they look.";

    // Append right content
    rightDiv.appendChild(rightImageDiv);
    rightDiv.appendChild(rightImageText);

    // Append left and right divs to left-right div
    leftRightDiv.appendChild(leftDiv);
    leftRightDiv.appendChild(rightDiv);

    // Append all sections to the content div
    contentDiv.appendChild(textDiv);
    contentDiv.appendChild(buttonDiv);
    contentDiv.appendChild(leftRightDiv);

    // Append the content div to the body or another element
    document.body.appendChild(contentDiv);
}

makeHomepage()

