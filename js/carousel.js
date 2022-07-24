let carousel = document.querySelector('.carousel');
let carousel_items = carousel.querySelectorAll('.carousel-item');
let current = 1;

let nextButton = carousel.querySelector('a.next');
let previousButton = carousel.querySelector('a.previous');

function step(iteration) {
    if(iteration == '+') {
        current++;
        if(current > 3) {
            current = 1;
        }
    } else if(iteration == '-') {
        current--;
        if(current < 1) {
            current = 3;
        }
    }
    for(let item of carousel_items) {
        let id = item.dataset.id;
        if(id == current) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    }
}

nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    step('+');
});

previousButton.addEventListener('click', (e) => {
    e.preventDefault();
    step('-');
})