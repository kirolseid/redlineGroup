var swiper = new Swiper("#welcomesec .mySwiper", {
  navigation: {
    nextEl: "#welcomesec .swiper-button-next",
    prevEl: "#welcomesec .swiper-button-prev",
  },
});

var swiper = new Swiper("#portfolio .nav-tabs .mySwiper", {
  slidesPerView: 4,
  slidesPerColumn: 4,
  spaceBetween: 0,
  navigation: {
    nextEl: "#portfolio .nav-tabs .swiper-button-next",
    prevEl: "#portfolio .nav-tabs .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1.8,
      spaceBetween: 20,
    },
    310: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".arr .mySwiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".arr .swiper-button-next",
    prevEl: ".arr .swiper-button-prev",
  },
});


var swiper1 = new Swiper(".graphic .mySwiper1", {
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
});

 var galleryTop = new Swiper(".gallery-top", {
  //  spaceBetween: 10,
  //  navigation: {
  //    nextEl: ".gallery-top .swiper-button-next",
  //    prevEl: ".gallery-top .swiper-button-prev",
  //  },
   loop: true,
   loopedSlides: 4,
 });
 var galleryThumbs = new Swiper(".gallery-thumbs", {
   spaceBetween: 10,
   centeredSlides: true,
   slidesPerView: "auto",
   touchRatio: 0.2,
   slideToClickedSlide: true,
   loop: true,
   loopedSlides: 4,
 });
 galleryTop.controller.control = galleryThumbs;
 galleryThumbs.controller.control = galleryTop;


 

var swiper = new Swiper(".gallery .collection .mySwiper", {
  slidesPerView: 4.5,
  slidesPerColumn: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".gallery .collection .swiper-button-next",
    prevEl: ".gallery .collection .swiper-button-prev",
  },

  breakpoints: {
    200: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2.9,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 3.8,
      spaceBetween: 50,
    },

    1400: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".gallery .Images .mySwiper", {
  slidesPerView: 3.5,
  slidesPerColumn: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".gallery .Images .swiper-button-next",
    prevEl: ".gallery .Images .swiper-button-prev",
  },

  breakpoints: {
    200: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2.9,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 3.8,
      spaceBetween: 50,
    },

    1400: {
      slidesPerView: 3.3,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".gallery .Vedios .mySwiper", {
  slidesPerView: 3.5,
  slidesPerColumn: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".gallery .Vedios .swiper-button-next",
    prevEl: ".gallery .Vedios .swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2.9,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 3.8,
      spaceBetween: 50,
    },

    1400: {
      slidesPerView: 3.3,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".gatalog  .mySwiper", {
  slidesPerView: 3.5,
  slidesPerColumn: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".gatalog  .swiper-button-next",
    prevEl: ".gatalog  .swiper-button-prev",
  },

  breakpoints: {
    200: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2.9,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 3.8,
      spaceBetween: 50,
    },

    1400: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".about .mySwiper", {
  navigation: {
    nextEl: ".about .swiper-button-next",
    prevEl: ".about .swiper-button-prev",
  },
  slidesPerView: "auto",
  spaceBetween: 50,

  // pagination: {
  //   el: ".about .swiper-pagination",
  //   clickable: true,
  // },
});

var swiper = new Swiper(".brands .mySwiper", {
  slidesPerView: 6,
  slidesPerColumn: 2,
  spaceBetween: 10,

  navigation: {
    nextEl: ".brands .swiper-button-next",
    prevEl: ".brands .swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2.9,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 6,
      spaceBetween: 50,
    },

    1400: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".clints .mySwiper", {
  slidesPerView: 6,
  slidesPerColumn: 2,
  spaceBetween: 10,
  // centeredSlides: true,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".brands .swiper-button-next",
    prevEl: ".brands .swiper-button-prev",
  },
  breakpoints: {
    200: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2.9,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 6,
      spaceBetween: 50,
    },

    1400: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});






$("nav span").click(() => {
  $(".closeNav").css("right", "0px");
  $(".backgroungHoverCover").css("width", "100%");
});

$(".closeNav .img").click(() => {
  $(".closeNav").css("right", "-1000px");
  $(".backgroungHoverCover").css("width", "0%");
});


$(".servesLink").mouseenter(function () {
  $(".servesHover").css("display", "block");
  $(".servesLink").css("color", " #DC1C22");
  $("body").css("overflow", "hidden");
});

// $('body *').not('.servesHover ').mouseenter(function () {
//   $(".servesLink").css("color", "#fff");
//   $(".servesHover").css("display", "none");
//   $("body").css("overflow", "auto");

// })???;



$(".nav-item").mouseenter(function () {
  $(".servesLink").css("color", "#fff");
  $(".servesHover").css("display", "none");
  $("body").css("overflow", "auto");

})

$(".servesHover").mouseleave(function () {
  $(".servesLink").css("color", "#fff");
  $(".servesHover").css("display", "none");
  $("body").css("overflow", "auto");
});

$(".LoginLink").click(function () {
  $(".backgroungHoverCover").css("width", "100%");
  $(".loginHover").css("display", "block");
  $("body").css("overflow", "hidden");
});

$(".backgroungHoverCover").click(function () {
  $(".backgroungHoverCover").css("width", "0%");
  $(".loginHover").css("display", "none");
  $("body").css("overflow", "auto");
  $("body").css("overflow-x", "hidden");
});

$(document).ready(() => {
  $("#welcomesec h1 ").delay(500).animate(
    {
      left: "0%",
    },
    3000
  );
});

$(document).ready(() => {
  $("#welcomesec .vedio  ").delay(1000).animate(
    {
      opacity: "1",
    },
    3000
  );
});

$(document).ready(() => {
  $("#welcomesec .socail ul ").delay(1000).animate(
    {
      opacity: "1",
    },
    3000
  );
});

$(document).ready(() => {
  $("#welcomesec .bttn ").delay(5500).animate(
    {
      opacity: "1",
    },
    3000
  );
});

let container = document.querySelector("#whyUs");
function isScrolledIntoView(elem) {
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  var isVisible = elemTop <= 150;
  // console.log(elemTop);
  return isVisible;
}

window.addEventListener("scroll", function () {
  if (isScrolledIntoView(container)) {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 3000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
  }
});

let portfolioSec = document.querySelector("#portfolio .portfolio");
function isScrolledIntoView(elem) {
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  var isVisible = elemTop <= 350;
  // console.log(rect);
  return isVisible;
}

window.addEventListener("scroll", function () {
  if (isScrolledIntoView(portfolioSec)) {
    $("#portfolio .portfolio ").delay(000).animate({ opacity: "1" }, 1000);

    $("#portfolio  .slide1").delay(600).animate({ opacity: "1" }, 1000);

    $("#portfolio  .slide2").delay(800).animate({ opacity: "1" }, 1000);

    $("#portfolio  .slide3").delay(1000).animate({ opacity: "1" }, 1000);

    $("#portfolio  .slide4").delay(1200).animate({ opacity: "1" }, 1000);

    $("#portfolio  .slide5").delay(1400).animate({ opacity: "1" }, 1000);
  }
});

$("#footer .up").click(() => {
  $(window).scrollTop(0);
});

// $(window).scroll(function() {
//   var scrolledY = $(window).scrollTop();
//   // console.log(scrolledY);
//   $('.serve1').css('background-position', 'left ' + ((scrolledY)) + 'px');
// });

// $(window).scroll(function() {
//   var scrolledY = $(window).scrollTop();
//   $('.serve2').css('background-position', 'left ' + ((scrolledY)) + 'px');
// });

// $(window).scroll(function() {
//   var scrolledY = $(window).scrollTop();
//   $('.serve3').css('background-position', 'left ' + ((scrolledY)) + 'px');
// });

// $(window).scroll(function() {
//   var scrolledY = $(window).scrollTop();
//   $('.serve4').css('background-position', 'left ' + ((scrolledY)) + 'px');
// });

$(window).scroll(function () {
  let width = document.body.clientWidth;
  // if(width >= 1440px )
  if (width <= 780 && width >= 480) {
    var scrolledY = $(window).scrollTop();
    // console.log(scrolledY);
    $(".serve1").css("background-position", "left " + (scrolledY - 85) + "px");
    $(".serve2").css("background-position", "left " + (scrolledY - 80) + "px");
    $(".serve3").css("background-position", "left " + (scrolledY - 80) + "px");
    $(".serve4").css("background-position", "left " + (scrolledY - 80) + "px");
  }

  else if (width <= 480 && width >=100) {
    var scrolledY = $(window).scrollTop();
    // console.log(scrolledY);
    $(".serve1").css("background-position", "left " + (scrolledY  -420) + "px");
    $(".serve2").css("background-position", "left " + (scrolledY - 420) + "px");
    $(".serve3").css("background-position", "left " + (scrolledY - 420) + "px");
    $(".serve4").css("background-position", "left " + (scrolledY - 420) + "px");
  }
  
});

$("input[type=file]").change(function () {
  // console.log(this.files[0]);
  var path = (window.URL || window.webkitURL).createObjectURL(file);
  console.log("path", path);
});
