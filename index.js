const nav = document.querySelector('#main')
const navPos = nav.getBoundingClientRect().top;

function fixNav() {
    let scrollPos = window.scrollY;
    if (scrollPos > navPos) {
        nav.classList.add('fixed-nav')
    } else {
        nav.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav)