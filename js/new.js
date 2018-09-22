$(() => {

  $('.header-item').click(function() {
    $('.header-item.active').removeClass('active');
    $(this).addClass('active');
    var clicked = $(this).attr('data-val');
    if (!$('.content.active').hasClass(clicked)) {
      $('.content.active').removeClass('active');
      $('.content.' + clicked).addClass('active');
    }
  });

});
