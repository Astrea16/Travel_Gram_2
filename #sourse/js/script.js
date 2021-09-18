//MIN-WIDTH for IE-11================================================
 $(window).resize(function(event){
		top(); 	
 });
 function top(){
 		var h=$(window).outerHeight();
 		$('.top').css('min-height',h);
 }
  top()
  
//ZOOM ===================
if($('.gallery').length>0){
	baguetteBox.run('.gallery',{

	});
}

//PARALlAX ========================================
	$(window).scroll(function(event){
		var s=0-$(this).scrollTop()/3;
		$('.top__image').css('transform','translate3d(0,'+s+'px,0)');  	
 });
//=====================================================

});