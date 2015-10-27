$(document).ready(function(){


$('.readmore a').click(function( event ) {
	event.preventDefault();
	$('#show-this-on-click').slideDown();
	$('.readmore').hide();
	$('.readless').show();
});

$('.readless a').click(function( event ) {
	event.preventDefault();
	$('#show-this-on-click').slideUp();
	$('.readless').hide();
	$('.readmore').show();
});

$('#sidebar a').click(function( event ) {
	event.preventDefault();
	$('#learnmoretext').slideDown();
	$('.learnmore').hide();

});

});