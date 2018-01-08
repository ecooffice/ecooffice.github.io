var fade1 = document.querySelector(".fade1");
var earth = document.querySelector(".earth");

fade1.addEventListener("click", function() {
  
  earth.style.transition = ".5s";
  earth.style.opacity = "0";
});





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