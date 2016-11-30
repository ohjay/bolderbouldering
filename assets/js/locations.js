$(document).ready(function() {
  var submitRegWidth = '80%', submitExpWidth = '40%';
  // This should probably happen on a resize event as well
  if ($(window).width() <= 1100) {
    submitRegWidth = '60%';
    $('#zipcode-input').attr('data-text', 'Enter a zipcode');
    $('#zipcode-input').css('width', '40%');
    $('#zipcode-submit').css('width', submitRegWidth);
  } else if ($(window).width() <= 1350) {
    submitRegWidth = '70%';
    $('#zipcode-input').css('width', '30%');
    $('#zipcode-submit').css('width', submitRegWidth);
  }
  
  var zipcodeInput = $('#zipcode-input');
  var permissibleEvts = [8, 35, 36, 37, 38, 39, 40, 46];
  var expanded = false;
  var handleZipcodeInput = function(evt) {
    if (!permissibleEvts.includes(evt.which) && zipcodeInput.text().length >= 5) {
      evt.preventDefault();
    }
    if (!expanded && zipcodeInput.text().length >= 5) {
      $('#zipcode-submit').css('width', submitExpWidth);
      $('#zipcode-submit').css('color', '#ffffff');
      $('#zipcode-submit').css('cursor', 'pointer');
      expanded = true;
    } else if (expanded && zipcodeInput.text().length < 5) {
      $('#zipcode-submit').css('width', submitRegWidth);
      $('#zipcode-submit').css('color', '#a5a5a5');
      $('#zipcode-submit').css('cursor', 'default');
      expanded = false;
    }
  }
  zipcodeInput.keyup(function(evt) { handleZipcodeInput(evt); });
  zipcodeInput.keydown(function(evt) { handleZipcodeInput(evt); });
});
