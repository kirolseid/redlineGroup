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

$(document).ready(() => {
  $("#welcomesec h3 ").delay(1500).animate(
    {
      left: "8%",
    },
    2000
  );
});

$(document).ready(() => {
  $("#welcomesec h1 ").delay(3500).animate(
    {
      left: "8%",
    },
    2000
  );
});

$(document).ready(() => {
  $("#welcomesec .line1  ").delay(4000).animate(
    {
      opacity: "1",
    },
    3000
  );
});

$(document).ready(() => {
  $("#welcomesec p ").delay(5000).animate(
    {
      opacity: "0.7",
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
      3000
    );


    $("#portfolio  .slide1").delay(600).animate(
      {opacity:'1'},
      3000
    );

    $("#portfolio  .slide2").delay(800).animate(
      {opacity:'1'},
      3000
    );

    $("#portfolio  .slide3").delay(1000).animate(
      {opacity:'1'},
      3000
    );

    $("#portfolio  .slide4").delay(1200).animate(
      {opacity:'1'},
      3000
    );

    $("#portfolio  .slide5").delay(1400).animate(
      {opacity:'1'},
      3000
    );

   
     
  }
});

