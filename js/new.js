$(function() {

  $('.header-item').click(function() {
    $('.header-item.current').removeClass('current');
    $(this).addClass('current');
    var clicked = $(this).attr('data-val');
    $('.mob-menu li.active').removeClass('active');
    $('.mob-menu li.mob-' + clicked).addClass('active');
    if (!$('.main-content .content.current').hasClass(clicked)) {
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

  $('.toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(450);
      $this.removeClass('open');
    } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $('a.toggle.open').removeClass('open');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(450);
      $this.toggleClass('open');
    }
  });

  $('.mobile-menu-container').mousedown(function() {
    $(this).toggleClass('change');
    $('.mob-menu').toggleClass('closed');
  });

  $('.mob-menu li').mousedown(function() {
    $('.header-items-container.out').removeClass('out');
    $('.header-item.hidden').removeClass('hidden');
    if (!$(this).hasClass('active')) {
      $('.mob-menu').addClass('closed');
      $('.mobile-menu-container').removeClass('change');
      $('.mob-menu li.active').removeClass('active');
      $(this).addClass('active');
      var clicked2 = $(this).attr('data-val');
      $('.header-item.current').removeClass('current');
      $('.header-item.' + clicked2).addClass('current');
      if (!$('.content.current').hasClass(clicked2)) {
        $('.content.current').addClass('hidden');
        setTimeout(function() {
          $('.content.current').removeClass('current');
          $('.content.' + clicked2).addClass('current');
          setTimeout(function() {
            $('.content.hidden.' + clicked2).removeClass('hidden');
          },350);
        },350);
      }
    }
  });

});
