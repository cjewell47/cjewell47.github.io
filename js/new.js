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

  $('.content.default .header-item').click(function() {
    $('.header-item.hidden').removeClass('hidden');
    var clicked1 = $(this).attr('data-val');
    $('.header-item.' + clicked1).addClass('current');
    console.log($('.header-item.' + clicked1));

  });

});
