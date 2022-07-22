let menu = document.querySelector('nav.site-nav');
let btn = document.querySelector('button.nav-toggler');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('is-open');
});