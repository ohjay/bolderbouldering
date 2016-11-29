$(document).ready(function() {
  var isFlipped = false;
  $('#training-flip').click(function() {
    if (!isFlipped) {
      $('#tb-wrapper').addClass('flipped');
      isFlipped = true;
    }
  });
});
