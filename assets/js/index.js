$(document).ready(function() {
  $('.td-snippet').hover(function() {
    $(this).children('.snippet-wrapper').addClass('flipped');
  }, function() {
    $(this).children('.snippet-wrapper').removeClass('flipped');
  });
  
  $('.td-snippet').click(function() {
    window.location.href = '/bolderbouldering' + $(this).attr('id');
  });
});
