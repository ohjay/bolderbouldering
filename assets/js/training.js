$(document).ready(function() {
  var isFlipped = false;
  $('#training-flip').click(function() {
    if (!isFlipped) {
      $('#tb-wrapper').addClass('flipped');
      isFlipped = true;
    }
    
    // Take the nice button off the page
    $(this).fadeOut(500, function() {
      $(this).remove();
    });
  });
});
