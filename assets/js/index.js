var wordHeight = 0;
var shortenDescriptions = function() {
  if ($('#r1-1').height() > wordHeight) {
    $('#r1-1').text('Your next training regimen');
  }
  if ($('#r1-2').height() > wordHeight) {
    $('#r1-2').text('For those freezing nights');
  }
  if ($('#r1-3').height() > wordHeight) {
    $('#r1-3').text('All of the nearest rocks');
  }
  if ($('#r1-4').height() > wordHeight) {
    $('#r1-4').text('External climbing articles');
  }
};

$(document).ready(function() {
  $('.td-snippet').hover(function() {
    $(this).children('.snippet-wrapper').addClass('flipped');
  }, function() {
    $(this).children('.snippet-wrapper').removeClass('flipped');
  });
  
  $('.td-snippet').click(function() {
    window.location.href = '/bolderbouldering' + $(this).attr('id');
  });
  
  // Code extracted from http://jsfiddle.net/ambiguous/JbMhZ/1/
  // Check if a span extends past one line
  // I don't need any more jQuery functions for reqs so hopefully this is okay
  var content = $('#r1-1').html();
  content = ' <span id="one-word">' + content.replace(/ /, '</span> ');
  $('#r1-1').html(content);
  wordHeight = $('#one-word').height();
  
  shortenDescriptions();
  $(window).resize(function() {
    if ($(window).width() <= 1275) {
      shortenDescriptions();
    }
  });
});
