

// ES5 function declartion
var pizza = document.querySelector('.pizza-menu')
var mobilelinks = document.querySelector('.mobile__link-holder')
var backdrop = document.querySelector('.backdrop')

function Addclass() {
    pizza.classList.toggle('show')
    mobilelinks.classList.toggle('showlinks')
    backdrop.classList.toggle('showlinks')
}
