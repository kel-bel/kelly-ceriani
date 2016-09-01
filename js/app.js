$(document).ready(function() {
	$(".item").on( "mouseenter mouseleave", function() {
		$(this).find("img.bw, img.clr, .details").toggle().css({transition: "1s ease-out"});
		//$(this).find("article").css({background: "#4c6166"});	
	});
});