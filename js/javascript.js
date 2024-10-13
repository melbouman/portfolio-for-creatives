$(document).ready(function() {
  $('.experiment-image-1').click(function() {
    $('.experiment-image-2').fadeToggle("slow");
    // Alternative animation for example
    // slideToggle("fast");
  });
});
var logoarray = [
  "https://assets.codepen.io/316293/valentina-k-logo-1.svg",
  "https://assets.codepen.io/316293/valentina-k-logo-2.svg",
  "https://assets.codepen.io/316293/valentina-k-logo-3.svg"
];

function getRandomLogo() {
  var index = Math.floor(Math.random() * logoarray.length);
  return logoarray[index];
}

$("#logo-wrapper").hover(function () {
  var image = getRandomLogo();
  $("#logoarray").attr("src", image);
  console.log(image);
});

// Reset images on mouseout

$("#logo-wrapper").mouseout(function () {
  $("#logoarray").attr(
    "src",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/316293/beer.svg"
  );
  console.log(image);
});
