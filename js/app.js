$(document).ready(function() {
	$( "article" ).on( "mouseenter", function() {
		console.log('Working?');
		$("img.bw").hide().css({transition: "1s ease-out"});
		$("img.clr").show().css({transition: "1s ease-in"});
		$("article").css({background: "#4c6166", transition: "0.1s ease-in"});	
		$(".details").show().css({transition: "bottom 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94)"});
	})
	.mouseleave(function() {
		$("img.bw").show().css({transition: "1s ease-in"});
		$("img.clr").hide().css({transition: "1s ease-out"});
		$(".details").hide().css({transition: ""}); 
		$("article").css({background: "#d0d0d0", transition: "0.1s ease-in"});
	});
});