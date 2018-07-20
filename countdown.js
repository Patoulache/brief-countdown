var valuetime = document.getElementById("valuetime");
var puttime = document.getElementById("puttime");
var playstop = document.getElementById("playstop");
var reset = document.getElementById("reset");
var x = 0;
var stop = 0;
var days, hours, minutes, seconds, distance;

puttime.addEventListener("click", function() {
  var time = valuetime.value;
  document.getElementById("demo").innerHTML = "d " + "h " + time + "m " + "s ";
  document.getElementById("boom").innerHTML = "";
});

playstop.addEventListener("click", function() {
    var delai = (stop==0)?valuetime.value * 60000:stop;
    var now = new Date().getTime();
    var delai = now + delai;

  if (x == 0) {
    x = setInterval(function() {
      now = new Date().getTime();
      distance = delai - now;
      days = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

    if (now >= delai) {
      clearInterval(x);
      x = 0;
      document.getElementById("boom").innerHTML = '<img src="boom.jpg" width="2000" height="700"/>';
    };
  }, 1000);}

  else if (x !== 0) {
    stop = distance;
    console.log(distance);
    clearInterval(x);
    x = 0;
  };
});

reset.addEventListener("click", function() {
  var time = valuetime.value;
  document.getElementById("demo").innerHTML = "d " + "h "
  + time + "m " + "s ";
  clearInterval(x);
  console.log(valuetime.value)
  stop = 0;
  document.getElementById("boom").innerHTML = "";
});
/*
// Set the date we're counting down to
var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
*/
