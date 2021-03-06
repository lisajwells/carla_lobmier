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
			subMenusSubOffsetY: -8,
			keepHighlighted: true
		});
	});

	// SmartMenus Hamburger
	$(function() {
	  var $mainMenuState = $('#main-menu-state');
	  if ($mainMenuState.length) {
	    // animate mobile menu
	    $mainMenuState.change(function(e) {
	      var $menu = $('#main-menu');
	      if (this.checked) {
	        $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
	      } else {
	        $menu.show().slideUp(250, function() { $menu.css('display', ''); });
	      }
	    });
	    // hide mobile menu beforeunload
	    $(window).bind('beforeunload unload', function() {
	      if ($mainMenuState[0].checked) {
	        $mainMenuState[0].click();
	      }
	    });
	  }
	});

    // $(function () {
    //
    //     var pdf = 'assets/pdf/1211_GID_ISSUU.pdf';
    //
    //     var options = {
    //         height: "90vh",
    //         duration: 800,
    //         backgroundColor: "#0a0a0a",
    //         enableDownload: false,
    //         scrollWheel: false
    //     };
    //
    //     var flipBook = $("#flipbookContainer").flipBook(pdf, options);
    //
    // });


	


}); //end document ready




