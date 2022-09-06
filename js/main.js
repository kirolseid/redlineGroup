var swiper = new Swiper("#welcomesec .mySwiper", {
  navigation: {
    nextEl: "#welcomesec .swiper-button-next",
    prevEl: "#welcomesec .swiper-button-prev",
  },
});

var swiper = new Swiper("#software .mySwiper", {
  navigation: {
    nextEl: "#software .swiper-button-next",
    prevEl: "#software .swiper-button-prev",
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

  var isVisible = (elemTop === 100);
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



let serversec1 = document.querySelector("#serves .sec1");
function isScrolledIntoView(elem) {
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  var isVisible = (elemTop <= 100);
  // console.log(rect);
  return isVisible;
}


window.addEventListener("scroll", function () {
 
  if (isScrolledIntoView(serversec1)) {
   
    $("#serves .sec1 img ").delay(000).animate(
      {rotate:'360deg'},
      1500
    );

    $("#serves .sec1 p ").delay(000).animate(
      {opacity:'1'},
      1500
    );

    $("#serves .sec1 h3 ").delay(000).animate(
      {left:'0%'},
      1500
    );
     
  }
});




let serversec2 = document.querySelector("#serves .sec2");
function isScrolledIntoView(elem) {
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  var isVisible = (elemTop <= 100);
  // console.log(rect);
  return isVisible;
}


window.addEventListener("scroll", function () {
 
  if (isScrolledIntoView(serversec2)) {
   
    $("#serves .sec2 img ").delay(000).animate(
      {rotate:'360deg'},
      1500
    );

    $("#serves .sec2 p ").delay(000).animate(
      {opacity:'1'},
      2000
    );

    $("#serves .sec2 h3 ").delay(000).animate(
      {left:'0%'},
      1500
    );
     
  }
});





let serversec3 = document.querySelector("#serves .sec3");
function isScrolledIntoView(elem) {
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  var isVisible = (elemTop <= 100);
  // console.log(rect);
  return isVisible;
}


window.addEventListener("scroll", function () {
 
  if (isScrolledIntoView(serversec3)) {
   
    $("#serves .sec3 img ").delay(000).animate(
      {rotate:'360deg'},
      1500
    );

    $("#serves .sec3 p ").delay(000).animate(
      {opacity:'1'},
      2000
    );

    $("#serves .sec3 h3 ").delay(000).animate(
      {right:'0%'},
      1500
    );
     
  }
});



let serversec4 = document.querySelector("#serves .sec4");
function isScrolledIntoView(elem) {
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  var isVisible = (elemTop <= 100);
  // console.log(rect);
  return isVisible;
}


window.addEventListener("scroll", function () {
 
  if (isScrolledIntoView(serversec4)) {
   
    $("#serves .sec4 img ").delay(000).animate(
      {rotate:'360deg'},
      1500
    );

    $("#serves .sec4 p ").delay(000).animate(
      {opacity:'1'},
      2000
    );

    $("#serves .sec4 h3 ").delay(000).animate(
      {right:'0%'},
      1500
    );
     
  }
});



let portfolioSec = document.querySelector("#portfolio .portfolio");
function isScrolledIntoView(elem) {
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  var isVisible = (elemTop <= 100);
  // console.log(rect);
  return isVisible;
}


window.addEventListener("scroll", function () {
 
  if (isScrolledIntoView(portfolioSec)) {
   
    $("#portfolio .portfolio ").delay(000).animate(
      {opacity:'1'},
      3000
    );


    $("#portfolio  .companies").delay(300).animate(
      {opacity:'1'},
      3000
    );

    $("#portfolio .features ul").delay(400).animate(
      {opacity:'1'},
      3000
    );

    $("#software ").delay(1000).animate(
      {opacity:'1'},
      3000
    );
   
     
  }
});

