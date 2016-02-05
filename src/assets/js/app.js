$(document).foundation();

$(function() {
    $("img.lazy").lazyload();
});

$(document).ready(function() {

	$(".fancybox").fancybox({
		padding : 0,

        openEffect  : 'none',
        closeEffect : 'none',
        nextEffect  : 'none',
        prevEffect  : 'none',
        padding     : 0,
        margin      : [20, 60, 20, 60], // Increase left/right margin


	    helpers : {
	        overlay : {
	            css : {
	                'background' : 'rgba(10, 10, 10, 0.9)'
	            }
	        },
	        title: {
	            type: 'outside',
	            position: 'top'
	        }
	    }
	}); //end fancybox





}); //end document ready




