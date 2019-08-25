$(function() {
    var nav = $('#nav');
    var win = $(window);
    $('#menu').on('click', function(e) {
      e.preventDefault();
      nav.slideToggle();
    });

    win.resize(function() {
      if (win.width() > 480 && nav.is(':hidden')) {
        nav.removeAttr('style');
      }
    });
  });