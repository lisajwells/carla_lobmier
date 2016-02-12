$(document).ready(function(){ 
  var touch   = $('#resp-menu');
  var menu  = $('.menu');
 
  $(touch).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  // $(.parent-menu).on('click', function(e) {
  //   e.preventDefault();
  //   $(.menu li ul).css('visibility','visible');
  // });
  
  $(window).resize(function(){
    var w = $(window).width();

    // breakpoint
    if(w > 767 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
});
