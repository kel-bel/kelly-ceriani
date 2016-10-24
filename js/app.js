$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

$( '.menu-btn' ).click(function(){
 	$('.responsive-menu').show();
 	$('.menu-btn').hide();
});

 $( '.close-btn' ).click(function(){
 	$('.responsive-menu').hide();
 	$('.menu-btn').show();
 });

 $( '.expanding' ).click(function(){
 	$('.threelilDescriptions').show();
 	$('.mydescription').show();
 	$('.implode').show();
 	$('.expanding').hide();
});

 $( '.implode' ).click(function(){
 	$('.threelilDescriptions').hide();
 	$('.mydescription').hide();
 	$('.implode').hide();
 	$('.expanding').show();
 });
