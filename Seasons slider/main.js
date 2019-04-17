// 1. Klawisz <- (stzałka w lewo) przesuwa w lewo (cofa) slider
// 2. Klawisz -> (stzałka w lewo) przesuwa w prawo slider (do przod, czyli tak jak przy funkcji changeSlide) 
// lewa strzałka: keyCode = 37
// prawy strzałka: keyCode = 39
// 3. (strzałki) wstrzymuje setInterval, a po zmianie slajdu uruchamiają go ponownie (czas ma się liczyć ponownie)

// Projekt tutaj (przetestuj działajanie strzałek na klawiaturze)
// https://websamuraj.pl/examples/js/projekt9/


const slideList = [{
    img: "images/winter.jpg",
    text: 'Winter'
},
{
    img: "images/spring.jpg",
    text: 'Spring'
},
{
    img: "images/summer.jpg",
    text: 'Summer'
}, {

    img: "images/autumn.jpg",
    text: 'Autumn'


}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]
// Interfejs
const time = 4000;
let active = 0;

// Implementacje

const keyChangeSlide = (e) => {
    window.clearInterval(timer);
    console.log(e.keyCode);
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');

    if (e.keyCode === 37 || e.keyCode === 39) {

        e.keyCode == 37 ? active-- : active++;
        if (active < 0) {
            active = dots.length - 1;
        }
        else if (active == dots.length) {
            active = 0;
        }

    }


    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    dots[active].classList.add('active');
    timer = setInterval(changeSlide, time);
}

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}
let timer = setInterval(changeSlide, time);


// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener('keydown', keyChangeSlide)