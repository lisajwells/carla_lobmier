$(document).foundation();

$(function() {
    $("img.lazy").lazyload();
});

$(document).ready(function() {

	$(".fancybox").fancybox({
	    helpers : {
	        overlay : {
	            css : {
	                'background' : 'rgba(10, 10, 10, 0.9)'
	            }
	        },
	        title: {
	            type: 'outside'
	        }
	    }
	}); //end fancybox





}); //end document ready




