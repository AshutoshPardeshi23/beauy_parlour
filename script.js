let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');
let option = document.querySelectorAll('.option');

menuBtn.onclick = () => {
    navbar.classList.add('active');
}

closeBtn.onclick = () => {
    navbar.classList.remove('active');
}

for(var i=0; i < option.length; i++){
    option[i].addEventListener('click', () => {
    navbar.classList.remove('active');
    })
}
