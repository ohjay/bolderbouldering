$(document).ready(function() {
  $('.select-box').hover(function() {
    var table = $(this).find('.nav-table');
    var label = $(this).find('.nav-label2');
    if (label.length == 0) {
      label = $(this).find('.nav-label3');
    }

    table.css('background-color', '#212121');
    table.css('color', '#fff');
    label.css('text-shadow', 'none');
  }, function() {
    var table = $(this).find('.nav-table');
    var label = $(this).find('.nav-label2');
    if (label.length == 0) {
      label = $(this).find('.nav-label3');
    }
    
    table.css('background-color', '#ffffff');
    table.css('color', '#212121');
    label.css('text-shadow', '1px 1px #d3d3d3');
  });
  
  $('.select-box').click(function() {
    var table = $(this).find('.nav-table');
    var url = table.attr('id');
    window.location.href = url;
  });
});
