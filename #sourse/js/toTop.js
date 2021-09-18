$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      if ($('#toTop').is(':hidden')) {
        $('#toTop').css({opacity : 0.9}).fadeIn('slow');
      }
    } else { $('#toTop').stop(true, false).fadeOut('fast'); }
  });
  $('#toTop').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 400);
  });
  
  $(window).resize(function(event){
		mainScreen(); 	
	});
	function mainScreen(){
		var h=$(window).outerHeight();
		$('.main-screen').css('min-height',h);
	}
	mainScreen()