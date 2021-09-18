 $('.header-bottom__link').click(function(event){
  	
  	 $('.header-bottom__link').removeClass('active');
  	 $(this).addClass('active')

  	return false;
  });

	 $(window).resize(function(event){
	adaptive_function();
});