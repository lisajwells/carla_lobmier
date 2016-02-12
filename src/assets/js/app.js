$(document).foundation();

$(function() {
    $("img.lazy").lazyload();
});

$(document).ready(function() {

	$(".fancybox").fancybox({
		padding : 0,
		loop: false,
		nextClick   : true,
		aspectRatio : true,
        openEffect  : 'fade',
        closeEffect : 'fade',
        nextEffect  : 'fade',
        prevEffect  : 'fade',
        margin      : [20, 60, 20, 60], // Increase left/right margin


	    helpers : {
	        overlay : {
              css : {
                  'background' : 'rgba(10, 10, 10, 1)',
              },
              locked: false
          },
	        title: {
	            type: 'outside',
	            position: 'top'
	        }
	    } // end helpers
	}); //end fancybox


	// SmartMenus jQuery init -->
	$(function() {
		$('#main-menu').smartmenus({
			subMenusSubOffsetX: 6,
			subMenusSubOffsetY: -8
		});
	});


}); //end document ready




