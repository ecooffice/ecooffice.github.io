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

$(function() {
  $.scrollify({
    section : ".section",
    easing: "easeOutExpo",
    interstitialSection :  ".partsection" ,
  });
  
  $("#menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

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
