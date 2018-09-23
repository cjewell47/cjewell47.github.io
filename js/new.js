$(function() {

  $('.header-item').click(function() {
    $('.header-item.current').removeClass('current');
    $(this).addClass('current');
    var clicked = $(this).attr('data-val');
    if (!$('.content.current').hasClass(clicked)) {
      $('.content.current').removeClass('current');
      $('.content.' + clicked).addClass('current');
    }
  });

});
