$(function() {

	$('.toggle-btn').on("click", function() {
		$('#header').toggleClass('open');  
	});
  $('#mask').on("click", function() {
    $('#header').toggleClass('open');
  });
  $('#navi a').on("click", function() {
    $('#header').toggleClass('open');
  });

  $(window).on('load', function() {
    $('#to-top').hide();
  });
  $(window).scroll(function() {    
    if ($(this).scrollTop() > 700) {
      $('#to-top').fadeIn();
    } else {
      $('#to-top').fadeOut();
    }
  });
  $('#to-top').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  
});

