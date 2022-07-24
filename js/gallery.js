let grids = document.querySelectorAll('.grid-item a');


for(let grid of grids) {
    grid.addEventListener('click', (e) => {
        e.preventDefault();
    });

    grid.addEventListener('mouseover', (e) => {
        let figcaption_inner = grid.querySelector('.figcaption__inner');
        figcaption_inner.classList.add('active');

        let caption = grid.querySelector('.caption');
        caption.classList.add('active');
    });
    grid.addEventListener('mouseout', (e) => {
        let figcaption_inner = grid.querySelector('.figcaption__inner');
        figcaption_inner.classList.remove('active');

        let caption = grid.querySelector('.caption');
        caption.classList.remove('active');
    });
}