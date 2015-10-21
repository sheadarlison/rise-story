$(document).ready(function() { 
		

		//What is Rise Vision? slide controls
		
        $('#banner').oneByOne({
			className: 'oneByOne',	             
			easeType: 'fadeInLeft',
			slideShow: true,
			showButton: true,
			enableDrag: true,
			showArrow:false
		}); 

		//How is it free? slide controls

		$('#banner2').oneByOne({
			className: 'oneByOne',
			easeType: 'fadeInLeft',
			showArrow: true,
			slideShow: true,
			enableDrag: true,
			showArrow:false
		});
	
	//Who Uses Rise? slide controls

		$('#banner3').oneByOne({
			className: 'oneByOne',
			easeType: 'fadeInLeft',

			showArrow: true,
			slideShow: true,
			enableDrag: true,
			showArrow:false
		});



	//automatic page scroll controls
	
		var sectionOne = $('#video_element');
		var sectionTwo = $('#banner');
		var sectionThree = $('#banner2');
		var sectionFour = $('#CV');
		var sectionFive = $('#Testimonials');
		var slideCounter = 0;
	

		var automaticPageScrollTimer = function (scrollElement, scrollTime){
		 var speed = scrollTime;
    	$('html,body').animate({
        scrollTop: $(scrollElement).offset().top
    	}, speed);
		console.log('testingScroll')
		slideCounter++
		}

		var scrollController = function(){
			
			if (slideCounter === 0){
			automaticPageScrollTimer(sectionTwo,1000);
			clearInterval(scrollTimeSetter);
			scrollTimeSetter = setInterval(scrollController,40000);
		} else if (slideCounter === 1){
			automaticPageScrollTimer(sectionThree,1000);
			clearInterval(scrollTimeSetter);
			scrollTimeSetter = setInterval(scrollController,36000);
		} else if (slideCounter === 2){
			automaticPageScrollTimer(sectionFour,1000);
			clearInterval(scrollTimeSetter);
			scrollTimeSetter = setInterval(scrollController,30000);
		} else if (slideCounter === 3){
			automaticPageScrollTimer(sectionFive,1000);
			clearInterval(scrollTimeSetter);
			scrollTimeSetter = setInterval(scrollController,15000);
		} else if (slideCounter === 4){
			automaticPageScrollTimer(sectionOne,1000);
			slideCounter = 0;
			clearInterval(scrollTimeSetter);
			scrollTimeSetter = setInterval(scrollController,15000);
		}
		}
		//==========
		//un-comment this line to start the autoscrolling for the page

		// var scrollTimeSetter = setInterval(scrollController,15000);
		
		//==========

		//calling pinch-zoom effect
		$('div.pinch-zoom').each(function () {
                new RTP.PinchZoom($(this), {});
            });


		//QR code button animation

	var closeButton = function(){
		$('.QRcode').removeClass('slideAnimation').addClass('slideAnimationDown');
	}	

	var closeButtonTimer;
	
    $('button').on('click',function(){
    if ($('.QRcode').hasClass('slideAnimation')){
    	$('.QRcode').removeClass('slideAnimation').addClass('slideAnimationDown');
    	clearTimeout(closeButtonTimer);
    } else {
    	$('.QRcode').removeClass('slideAnimationDown').addClass('slideAnimation');
    	closeButtonTimer = setTimeout(closeButton,12000);
    }
    });

// 	$(document).ready(function () {
    
//     $('button').click( function () {
//         $('#message-box').delay(300).slideDown('slow');
//         $('.QRcode').delay(700).css('display','block');
//     });
    
// });



    

	 });

	

