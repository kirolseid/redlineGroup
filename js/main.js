var swiper = new Swiper("#welcomesec .mySwiper", {
  navigation: {
    nextEl: "#welcomesec .swiper-button-next",
    prevEl: "#welcomesec .swiper-button-prev",
  },
});



var swiper = new Swiper('#portfolio .mySwiper', {
  slidesPerView: 4,
  slidesPerColumn: 4,
  spaceBetween: 0,
  navigation: {
    nextEl: "#portfolio .swiper-button-next",
    prevEl: "#portfolio .swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


var swiper = new Swiper('.gallery .collection .mySwiper', {
  slidesPerView: 3.5,
  slidesPerColumn: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".gallery .collection .swiper-button-next",
    prevEl: ".gallery .collection .swiper-button-prev",
  },

  
});

var swiper = new Swiper('.gallery .Images .mySwiper', {
  slidesPerView: 3.5,
  slidesPerColumn: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".gallery .Images .swiper-button-next",
    prevEl: ".gallery .Images .swiper-button-prev",
  },

  
});

var swiper = new Swiper('.gallery .Vedios .mySwiper', {
  slidesPerView: 3.5,
  slidesPerColumn: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".gallery .Vedios .swiper-button-next",
    prevEl: ".gallery .Vedios .swiper-button-prev",
  },

  
});

var swiper = new Swiper('.gatalog  .mySwiper', {
  slidesPerView: 3.5,
  slidesPerColumn: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".gatalog  .swiper-button-next",
    prevEl: ".gatalog  .swiper-button-prev",
  },
  // breakpoints: {
  //   640: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //     spaceBetween: 50,
  //   },
  // },

  
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



$(".servesLink").mouseenter(function(){
  $("#welcomesec").css("background-image", "url('')");
  $('#welcomesec').css("background-color", "black")
  $('.servesHover').css("display", "block",) 
  // $('.servesHover').css("transition", "s")  
  $('.servesLink').css('color', ' #DC1C22')

  $('body').css("overflow", "hidden")
  
});

$(".servesHover").mouseleave(function(){
  $('.servesLink').css('color', '#fff')
  $("#welcomesec").css("background-image", "url('../images/sam-moghadam-khamseh-baII27W6z7k-unsplash.png')");
  // $('#welcomesec').css("background-color", "black")
  $('.servesHover').css("display", "none")  
  $('body').css("overflow", "auto")
  $('body').css("overflow-x", "hidden")

  
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

  var isVisible = (elemTop <= 150);
  // console.log(elemTop);
  return isVisible;
}

window.addEventListener("scroll", function () {
  if (isScrolledIntoView(container)) {
    $("#whyUs .whyUs .l ").delay(000).animate(
      {
        left: "0%",
      },
      5000
    );

    $("#whyUs .whyUs .r ").delay(000).animate(
      {
        right: "0%",
      },
      5000
    );

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

  var isVisible = (elemTop <=350);
  // console.log(rect);
  return isVisible;
}


window.addEventListener("scroll", function () {
 
  if (isScrolledIntoView(portfolioSec)) {
   
    $("#portfolio .portfolio ").delay(000).animate(
      {opacity:'1'},
      2000
    );


    $("#portfolio  .slide1").delay(600).animate(
      {opacity:'1'},
      2000
    );

    $("#portfolio  .slide2").delay(800).animate(
      {opacity:'1'},
      2000
    );

    $("#portfolio  .slide3").delay(1000).animate(
      {opacity:'1'},
      2000
    );

    $("#portfolio  .slide4").delay(1200).animate(
      {opacity:'1'},
      2000
    );

    $("#portfolio  .slide5").delay(1400).animate(
      {opacity:'1'},
      2000
    );

   
     
  }
});

