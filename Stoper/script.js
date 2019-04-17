// http://websamuraj.pl/examples/js/projekt11/


const startbtn = document.querySelector('.main');
const resetbtn = document.querySelector('.reset');
const timePanel = document.querySelector('.time div');
let initialDate = new Date();
let i = 0;
let timer = 0;




startTimer = function () {


    if (startbtn.textContent === 'Start') {
        timer = setInterval(startCount, 10);
        startbtn.textContent = 'Pause';

        startCount();



    }

    else if (startbtn.textContent === 'Pause') {
        clearInterval(timer);
        startbtn.textContent = 'Start';



    }

}

ResetTimer = function () {
    // clearInterval(timer);
    timePanel.textContent = '---';
    i = 0;
    clearInterval(timer);
    startbtn.textContent = 'Start';


}

startCount = () => {
    i++;
    let minutes = Math.floor(i / (100 * 60));
    let seconds = Math.floor((i / 100) % 60);
    let mseconds = i % 100;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    mseconds = mseconds < 10 ? '0' + mseconds : mseconds;

    timePanel.textContent = `${minutes}:${seconds}:${mseconds}`;




}


startbtn.addEventListener('click', startTimer);

resetbtn.addEventListener('click', ResetTimer);




