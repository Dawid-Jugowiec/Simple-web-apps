$('.interface').on("click", function () {
 // console.log("działa!");
 // console.log(this);
 // console.log($(this))
 // console.log($(this).attr("class"))
 // console.log(this.className)

 if ($(this).hasClass("orange")) {
  console.log("prawda w pomarańczowy");
  $('body').attr("class", "orange")
  // $('body').toggleClass("orange");
  // $('body').css("background-color", "orange");
  // $('body').css({
  //  "background-color": "orange"
  // })
  // $('p').css({
  //  "font-size": "130px",
  // })
 }

 if ($(this).hasClass("green")) {
  console.log("prawda w zielony");
  $('body').attr("class", "green");

  // $('body').css({
  //  "background-color": "#0f0"
  // })


  // $('p').css({
  //  "font-size": "130px",
  // })
 }

 if ($(this).hasClass("increase")) {
  console.log("prawda w plus");
  $('.text').animate({
   "font-size": "+=2px"
  }, 500)
 }

 if ($(this).hasClass("move")) {
  console.log("prawda w strzałkę");
  $('.text').animate({
   "left": "+=15px",
   "letter-spacing": "+=2px"
  })
 }





 // if (this.classList.contains("green")) {
 //  console.log("prawda w zielony")
 // }
})