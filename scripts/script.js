$(document).ready(function() {
  $('.menu').click(function() {
    $('nav ul').slideToggle();
  });
  
  $(window).resize(function() {
    if($('.container').width > 620) {
      $('nav ul').show();
    } else {
      $('nav ul').hide();
    }
  });
});