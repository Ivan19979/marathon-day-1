const slides = document.querySelectorAll('.slide');
slides.forEach(slide => {
    slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
    })
});

slides[0].classList.add('active');
console.log(Math.floor(Math.random() * 5));

const clearActiveClasses = () => {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
}

let i = 0;
setInterval(() => {
    clearActiveClasses();
    slides[i].classList.add('active');
    i++;
    if(i >= slides.length){
        i = 0;
    }
}, 5000);


