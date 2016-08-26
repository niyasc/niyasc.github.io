$(document).ready(function() {
  $('.menu').click(function() {
    $('nav ul').slideToggle();
  });
  
  $(window).resize(function() {
    if($('.container').width() > 590) {
      $('nav ul').css('display', 'block');
    } else {
      $('nav ul').css('display', 'none');
    }
  });
});
