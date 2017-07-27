$(() => {



  // Closes the sidebar menu
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Scrolls to the selected menu item on the page
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // Map scrolling behaviour
  $(document).ready(function() {
    $('#map_iframe').addClass('scrolloff');
    $('#map').on('click', function () {
      $('#map_iframe').removeClass('scrolloff');
    });

    $('#map_iframe').mouseleave(function  () {
      $('#map_iframe').addClass('scrolloff');
    });
  });

  $(document).ready(function() {
    $(this).find('#headerText1').delay(350).fadeTo(1800, 1);
    $(this).find('#headerText2').delay(550).fadeTo(1800, 1);
    $(this).find('#headerText3').delay(750).fadeTo(1800, 1);
    $(this).find('#findOut').delay(950).fadeTo(1800, 1);
  });

  $(window).scroll(function () {
    var headerHeight   = $('.header').height();
    // var aboutHeight    = $('.about').height();
    // var servicesHeight = $('.services').height();
    var viewPortSize   = $(window).height();
    var triggerAt      = 150;
    // var triggerAt2     = 250;
    var triggerHeight  = (headerHeight - viewPortSize) + triggerAt;
    // var combinedHeight = (headerHeight + aboutHeight + servicesHeight);
    // var triggerHeight2 = (combinedHeight - viewPortSize) + triggerAt2;

    if ($(window).scrollTop() >= triggerHeight) {
      $('#who-icon').delay(600).fadeTo(1800, 0.6);
      $('.who-text').delay(600).fadeTo(1800, 1);
      $('#who-btn').delay(600).fadeTo(1800, 1);
      $('#port-icon').delay(900).fadeTo(1800, 0.6);
      $('.port-text').delay(900).fadeTo(1800, 1);
      $('#port-btn').delay(900).fadeTo(1800, 1);
      $('#con-icon').delay(1200).fadeTo(1800, 0.6);
      $('.con-text').delay(1200).fadeTo(1800, 1);
      $('#con-btn').delay(1200).fadeTo(1800, 1);
      $(this).off('scroll');
      // $(this).on('scroll');
    }

    // if ($(window).scrollTop() >= triggerHeight2) {
    //   $('.bio').delay(600).fadeTo(1800, 1);
    //   $('#downfromwhoiam').delay(900).fadeTo(1800, 0.6);
    //   $(this).off('scroll');
    // }
  });


  $('#who-btn').mouseenter(function() {
    $('#who-icon').fadeTo(20, 1);
  });

  $('#who-btn').mouseleave(function() {
    $('#who-icon').fadeTo(20, 0.6);
  });

  $('#port-btn').mouseenter(function() {
    $('#port-icon').fadeTo(20, 1);
  });

  $('#port-btn').mouseleave(function() {
    $('#port-icon').fadeTo(20, 0.6);
  });

  $('#con-btn').mouseenter(function() {
    $('#con-icon').fadeTo(20, 1);
  });

  $('#con-btn').mouseleave(function() {
    $('#con-icon').fadeTo(20, 0.6);
  });

  // $(window).scroll(function () {
  //   var headerHeight = $('.header').height();
  //   var aboutHeight  = $('.about').height();
  //   var servicesHeight = $('.services').height();
  //   var viewPortSize = $(window).height();
  //   var triggerAt2 = 250;
  //   var combinedHeight = (headerHeight + aboutHeight + servicesHeight);
  //   var triggerHeight2 = (combinedHeight - viewPortSize) + triggerAt2;
  //
  //   if ($(window).scrollTop() >= triggerHeight2) {
  //     $('.bio').delay(600).fadeTo(1800, 1);
  //     $('#downfromwhoiam').delay(900).fadeTo(1800, 0.6);
  //     $(this).off('scroll');
  //   }
  // });

  $('#downfromwhoiam').mouseenter(function() {
    $('#downfromwho-text').fadeTo(150, 1);
    $('#downfromwhoiam').fadeTo(150, 1);
  });

  $('#downfromwhoiam').mouseleave(function() {
    $('#downfromwho-text').fadeTo(150, 0);
    $('#downfromwhoiam').fadeTo(150, 0.6);
  });

  $('.img-2-1').mouseenter(function() {
    if ($(window).width() > 1024) {
      $(this).fadeTo(300, 1);
      $('.img-text-1').fadeTo(300, 1);
    }
  });

  $('.img-2-1').mouseleave(function() {
    if ($(window).width() > 1024) {
      $(this).fadeTo(300, 0);
      $('.img-text-1').fadeTo(300, 0);
    }
  });

  $('.img-2-2').mouseenter(function() {
    if ($(window).width() > 1024) {
      $(this).fadeTo(300, 1);
      $('.img-text-2').fadeTo(300, 1);
    }
  });

  $('.img-2-2').mouseleave(function() {
    if ($(window).width() > 1024) {
      $(this).fadeTo(300, 0);
      $('.img-text-2').fadeTo(300, 0);
    }
  });

  $('.img-2-3').mouseenter(function() {
    if ($(window).width() > 1024) {
      $(this).fadeTo(300, 1);
      $('.img-text-3').fadeTo(300, 1);
    }
  });

  $('.img-2-3').mouseleave(function() {
    if ($(window).width() > 1024) {
      $(this).fadeTo(300, 0);
      $('.img-text-3').fadeTo(300, 0);
    }
  });

  $('.img-2-4').mouseenter(function() {
    if ($(window).width() > 1024) {
      $(this).fadeTo(300, 1);
      $('.img-text-4').fadeTo(300, 1);
    }
  });

  $('.img-2-4').mouseleave(function() {
    if ($(window).width() > 1024) {
      $(this).fadeTo(300, 0);
      $('.img-text-4').fadeTo(300, 0);
    }
  });

  $('#downfromskills').mouseenter(function() {
    $('#downfromskills-text').fadeTo(150, 1);
    $('#downfromskills').fadeTo(150, 1);
  });

  $('#downfromskills').mouseleave(function() {
    $('#downfromskills-text').fadeTo(150, 0);
    $('#downfromskills').fadeTo(150, 0.6);
  });

  $('#downfromport').mouseenter(function() {
    $('#downfromport-text').fadeTo(150, 1);
    $('#downfromport').fadeTo(150, 1);
  });

  $('#downfromport').mouseleave(function() {
    $('#downfromport-text').fadeTo(150, 0);
    $('#downfromport').fadeTo(150, 0.6);
  });

  $('.contact-icons').mouseenter(function() {
    $(this).fadeTo(150, 1);
  });

  $('.contact-icons').mouseleave(function() {
    $(this).fadeTo(150, 0.6);
  });

});
