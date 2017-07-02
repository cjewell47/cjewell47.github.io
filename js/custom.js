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

  $('#who-btn').mouseenter(function() {
    $('#who-icon').fadeTo(50, 1);
  });

  $('#who-btn').mouseleave(function() {
    $('#who-icon').fadeTo(50, 0.6);
  });

  $('#port-btn').mouseenter(function() {
    $('#port-icon').fadeTo(50, 1);
  });

  $('#port-btn').mouseleave(function() {
    $('#port-icon').fadeTo(50, 0.6);
  });

  $('#con-btn').mouseenter(function() {
    $('#con-icon').fadeTo(50, 1);
  });

  $('#con-btn').mouseleave(function() {
    $('#con-icon').fadeTo(50, 0.6);
  });

});
