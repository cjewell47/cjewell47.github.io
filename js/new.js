$(function() {

  $('.header-item').click(function() {
    $('.header-item.current').removeClass('current');
    $(this).addClass('current');
    var clicked = $(this).attr('data-val');
    if (!$('.content.current').hasClass(clicked)) {
      $('.content.current').addClass('hidden');
      setTimeout(function() {
        $('.content.current').removeClass('current');
        $('.content.' + clicked).addClass('current');
        setTimeout(function() {
          $('.content.hidden.' + clicked).removeClass('hidden');
        },350);
      },350);
    }
  });

  $('.content.default .header-item').click(function() {
    $('.header-item.hidden').removeClass('hidden');
    $('.header-items-container.out').removeClass('out');
    var clicked1 = $(this).attr('data-val');
    $('.header-item.' + clicked1).addClass('current');

  });

});
