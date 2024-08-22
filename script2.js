const imgSlider = document.querySelector('.img-slider');
const items = document.querySelectorAll('.item');
const imgItems = document.querySelectorAll('.img-item');
const infoItems = document.querySelectorAll('.info-item');

let colors = ['#79b7ed', '#3171a8', '#1a3750', '#abafb3', '#17181a']

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let indexSlider = 0; 
let index = 0;      

const slider = () => {
    imgSlider.style.transform = `rotate(${indexSlider * 70}deg)`;

    items.forEach(item => {
        item.style.transform = `rotate(${indexSlider * -70}deg)`;
    });

    document.querySelector('.img-item.active').classList.remove('active');
    imgItems[index].classList.add('active');

    document.querySelector('.info-item.active').classList.remove('active');
    infoItems[index].classList.add('active');

    document.body.style.background = color[index];
}

const updateIndices = (direction) => {
    if (direction === 'next') {
        indexSlider = (indexSlider + 1) % imgItems.length;
        index = (index + 1) % imgItems.length;
    } else if (direction === 'prev') {
        indexSlider = (indexSlider - 1 + imgItems.length) % imgItems.length;
        index = (index - 1 + imgItems.length) % imgItems.length;
    }
}

nextBtn.addEventListener('click', () => {
    updateIndices('next');
    slider();
});

prevBtn.addEventListener('click', () => {
    updateIndices('prev');
    slider();
});

imgItems[0].classList.add('active');
