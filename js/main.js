

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


  $(document).ready(()=>{
    $('#welcomesec h3 ').delay(1500).animate({
      left: '8%',
    },2000);
  })

$(document).ready(()=>{
  $('#welcomesec h1 ').delay(3500).animate({
    left: '8%', 
  },2000);
  })

  $(document).ready(()=>{
    $('#welcomesec .line1 ').delay(4000).animate({
      opacity: "1", 
    },3000);
    })

    $(document).ready(()=>{
      $('#welcomesec p ').delay(5000).animate({
        opacity: "0.7", 
      },3000);
      })

      $(document).ready(()=>{
        $('#welcomesec .bttn ').delay(5500).animate({
          opacity: "1", 
        },3000);
        })  

  
 