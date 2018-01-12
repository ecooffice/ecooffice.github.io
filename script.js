var fade1 = document.querySelector(".fade1");
var fade2 = document.querySelector(".fade2");
var earth = document.querySelector(".earth");
var menu = document.querySelector(".main-nav");
var donate = document.querySelector(".donate");
var donateBtn = document.querySelector(".donate-btn");
var donateCloseBtn = document.querySelector(".donate-close-btn");

// убираем надпись click me и стрелочку у псевдоэлементов

fade1.addEventListener("click", function() {
  
  earth.style.transition = ".5s";
  earth.style.opacity = "0";
  
  var clickMe = document.querySelector(".fade1 .slick-dots li:nth-child(2) button");
  clickMe.classList.add("noclick");
});

fade2.addEventListener("click", function() {
  var arrow = document.querySelector(".fade2 .slick-dots li:nth-child(2) button");
  arrow.classList.add("noclick");
});

menu.addEventListener("click", function() {
  menu.classList.toggle("open");
});

// появление блока Хочу помочь по клику на кнопку

donateBtn.addEventListener("click", function() {
  donate.style.display = "block";
  donate.style.animation = "fadeInRight 1s ease-in-out";
});

donateCloseBtn.addEventListener("click", function() {
  setTimeout(function() {
    donate.style.display = "none";
  }, 1000);  
  donate.style.animation = "fadeOutRight 1s ease-in-out";   
});

// Здесь три слайдера slick - 2, 3, 4 экраны лендинга

$(document).ready(function(){
  $('.multiple-items').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: true,
    dots: true,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear'
  });
  
  $('.fade1').slick({
    autoplay: false,
    dots: true,
    arrows: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear'
  });
  
  $('.fade2').slick({
    autoplay: false,
    dots: true,
    arrows: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear'
  });
});


// это просто плавный скрол до якоря по клику в меню
// вроде бы как можно заменить свойством scroll-behavior: smooth; но тогда прокрутка будет хуже
  
$("#menu").on("click","a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});


// анимация при прокрутке плагин wow
// в планах заменить его нативным кодом

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       150,          // distance to the element when triggering the animation (default is 0)
    mobile:      false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init(); 

// поблочная прокрутка до якоря

$(document).ready(function(){
  $.scrollify({
    section : ".section",
    interstitialSection : ".partsection",
  });
});

