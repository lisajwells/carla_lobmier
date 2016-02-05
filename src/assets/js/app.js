$(document).foundation();

$(function() {
    $("img.lazy").lazyload();
});

$(document).ready(function() {

	$(".fancybox").fancybox({
	    helpers : {
	        overlay : {
	            css : {
	                'background' : 'rgba(58, 42, 45, 0.95)'
	            }
	        }
	    }
	}); //end fancybox





}); //end document ready




