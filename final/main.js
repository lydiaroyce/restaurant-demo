
// Reference to the pizza menu element
const pizza = document.querySelector('.pizza-menu');

// Reference to the mobile links element
const mobilelinks = document.querySelector('.mobile__link-holder');

// Reference to the backdrop element
const backdrop = document.querySelector('.backdrop');

// Function to toggle menu display classes
function toggleMenuDisplay() {
    pizza.classList.toggle('show');
    mobilelinks.classList.toggle('showlinks');
    backdrop.classList.toggle('showlinks');
}
