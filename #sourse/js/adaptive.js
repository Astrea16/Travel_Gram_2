//Adaptive function
$(window).resize(function(event){
	adaptive_function();
});
function adaptive_header(w,h){
	var headerMenu=$('.header-menu');
	
	if(w<767){
		if(!$('.header-bottom__list').hasClass('done')){
			$('.header-bottom__list').addClass('done').appendTo(headerMenu);
		}
		if(!$('.header-bottom__social-list').hasClass('done')){
			$('.header-bottom__social-list').addClass('done').prependTo(headerMenu);
		}
	}else {
		if($('.header-bottom__list').hasClass('done')){
			$('.header-bottom__list').removeClass('done').prependTo($('.header-bottom__menu'));
		}
		if($('.header-bottom__social-list').hasClass('done')){
			$('.header-bottom__social-list').removeClass('done').appendTo($('.header-bottom__social'));
		}
	}
}
function adaptive_function() {
	var w=$(window).outerWidth();
	var h=$(window).outerHeight();
	adaptive_header(w,h);
}
adaptive_function();
