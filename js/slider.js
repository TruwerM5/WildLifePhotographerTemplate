let images = [
    {id: 1, background: 'url(images/deer-2.jpg)'},
    {id: 2, background: 'url(images/zebra.jpg)'},
    {id: 3, background: 'url(images/red-panda.jpg)'},
];


let slider = document.querySelector('.slider');
let buttons_inner = document.querySelector('.buttons__inner');
let currentIndex = 1;


for(let item of images) {
    let slide = document.createElement('div');
    slide.classList.add('slider-item');
    slide.setAttribute('id', item.id)
    slide.style.backgroundImage = item.background;

    let black_bg = document.createElement('div');
    black_bg.classList.add('black-bg');
    slide.append(black_bg);

    slider.append(slide);

    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.classList.add('slide-button');
    btn.setAttribute('id', item.id);

    li.append(btn);
    buttons_inner.append(li);
}

let slides = document.querySelectorAll('.slider-item');
slides[0].classList.add('active');
let buttons = document.querySelectorAll('.slide-button');
buttons[0].classList.add('active');

function move(index) {
    currentIndex = index;
    if(currentIndex > images.length) {
        currentIndex = 1;
    }

    for(let item of buttons) {
        let id = +item.getAttribute('id');
        if(id == currentIndex) {
            item.classList.add('active')
        } else {
            item.classList.remove('active');
        }
    }

    for(let item of slides) {
        let id = +item.getAttribute('id');
        if(id == currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active')
        }
    }
    currentIndex++;
}


for(let button of buttons) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let id = e.target.getAttribute('id');
        move(id);
        clearInterval(timer);
        timer = setInterval(() => {
            move(currentIndex);
        }, 6000);
    });
}

move(currentIndex);

let timer = setInterval(() => {
    move(currentIndex);
}, 6000);