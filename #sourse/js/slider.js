
		if($('.slider').length>0){
		$('.slider').slick({
			arrows: true, 
			dots: true,
			accessiblity: false,
			slidesToShow: 1,
			//autoplaySpeed: 3000,
			nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-up"></i></button>',
			prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-down"></i></button>',	
			responsive:[{
				breakpoint:768,
				settings:{				  
				}
			}]	
		});
	}
