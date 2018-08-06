// Menu principal
var menu = document.querySelector('.menu-mobile');

function toggleMenu(event) {
    this.classList.toggle('responsive');
    document.querySelector(".nav-primary").classList.toggle("responsive");
    document.querySelector(".hamburger").classList.toggle("open");
    event.preventDefault();
}

menu.addEventListener('click', toggleMenu, false);

// DropDown
var DropDown = document.querySelector('.language');

function dropDown(event) {
    if (this.classList.toggle('dropdown')) {
        document.querySelector(".language-down").setAttribute('aria-expanded', "true");
    } else {
        document.querySelector(".language-down").setAttribute('aria-expanded', "false");
    }
}

DropDown.addEventListener('click', dropDown, false);