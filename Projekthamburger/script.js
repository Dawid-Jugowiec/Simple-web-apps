const burger = document.querySelector(".burger");
const aside = document.querySelector(".menu");

burger.addEventListener("click", function () {
    burger.classList.toggle("on");
    aside.classList.toggle("on");
})