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
  donate.style.animation = "fade-InRight 1s ease-in-out";
});

donateCloseBtn.addEventListener("click", function() {
  setTimeout(function() {
    donate.style.display = "none";
  }, 1000);  
  donate.style.animation = "fade-OutRight 1s ease-in-out";   
});

// Здесь три слайдера - 2, 3, 4 экраны лендинга
// плагин slick js https://github.com/kenwheeler/slick

$(document).ready(function(){
  $('.multiple-items').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: true,
    dots: true,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [{

      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }

    }]
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
    cssEase: 'linear',   
    
  });
});


// поблочная прокрутка до якоря и боковая пагинация
// плагин scrollify.js https://github.com/lukehaas/Scrollify

$(function() {
  $.scrollify({
    section: ".panel",
    interstitialSection : ".partsection",
    scrollbars: true,
    before: function(i,panels) {

      var ref = panels[i].attr("data-section-name");

      $(".pagination .active").removeClass("active");
   
      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
      var pagination = "<ul class=\"pagination\">";
      var activeClass = "";
      $(".panel").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });

      pagination += "</ul>";

      $(".home").append(pagination);
      
      // Смена цвета ссылок пагинации на первой странице
      
      $(".pagination").hover(function(){
        if($(".pagination li:nth-child(1) a").hasClass("active")){
          $(".pagination li a").css( "color", "#fff");
        } else {
          $(".pagination li a").css( "color", "#444");
        }
      });
      

      $(".pagination a").on("click",$.scrollify.move);
      
      // Переход к секции по клику по ссылке в меню
      
      $(".lending-nav li a").on("click",$.scrollify.move); 
      
      }
  });
});



