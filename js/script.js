// *****************************slider-part*****************************
$('.slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,    
    slidesToScroll: 1,  
    prevArrow: '<i class="fas fa-arrow-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-right next"></i>',
    asNavFor:".slider_1",
  });
$('.slider_1').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,    
    slidesToScroll: 1,  
    autoplay: true,
    prevArrow: '<i class="fas fa-arrow-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-right next"></i>',
    asNavFor:".slider",
  });
  
// *****************************counter-up-part*****************************
jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 100,
      time: 10000
  });
});

// *****************************typed js-part***************************** 
var typed = new Typed('.typed-part', {
  /**
   * @property {array} strings strings to be typed
   * @property {string} stringsElement ID of element containing string children
   */
  strings: [
    'Your Birthaday is coming within:',
    'Your Birthaday is coming within:'
  ],
  stringsElement: null,

  /**
   * @property {number} typeSpeed type speed in milliseconds
   */
  typeSpeed: 100,
  startDelay: 100,
});

// *****************************counter-down-part***************************** 
// Set the date we're counting down to
var countDownDate = new Date("May 9, 2023 23:59:50").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days +" " + "Days" 
  document.getElementById("hour").innerHTML = hours +" " + "Hours"
  document.getElementById("min").innerHTML = minutes +" " + "Minutes"
  document.getElementById("sec").innerHTML = seconds +" " + "Seconds Left"

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day").innerHTML = "Happy";
    document.getElementById("hour").innerHTML = "Birthday";
    document.getElementById("min").innerHTML = "To";
    document.getElementById("sec").innerHTML = "You!";
  }
}, 1000);



