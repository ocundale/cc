$(function() {

	// function switchPage(e) {
	// 	e.preventDefault();	
	// 	href = e.target.href;
	// 	page = (href.substr(href.lastIndexOf('/') + 1));
	// 	$(".active").removeClass("active");
	// 	$(this).addClass("active");
	// 	if (typeof page !== 'undefined') {			
	// 		switch (page) {
	// 			case "home_page":
	// 				$('#contact_page, #prints_page').fadeOut(function() {
	// 			    	$('#home_page').fadeIn(100);
	// 			    });
	// 			    break;
				
	// 			case "prints_page":
	// 				$('#contact_page, #home_page').fadeOut(function() {
	// 			    	$('#prints_page').fadeIn(100);
	// 			    });
	// 			    break;

	// 			case "contact_page":
	// 				$('#home_page, #prints_page').fadeOut(function() {
	// 			    	$('#contact_page').fadeIn(100);
	// 			    });
	// 			    break;
	// 		}
	// 	}
	// }

 //    function fadeContent() {
	//     $('#home_page').fadeIn(600);//.css({'top': '106px'}, 500);
	//     //$('.nav').animate({ marginTop: '20px'}, 500); //.css({backgroundColor: 'rgba(000,000,000,0.9)'});
	// 	$('.galimg').fadeIn(600);
	// 	$('img.bg').fadeIn(2000);
	// }

	// //Listeners
	// setTimeout(fadeContent, 1500);

	// setTimeout(function() {
	// 	$('.bg').attr('src', 'img/tree.jpg');
	// }, 11500);

	// setTimeout(function() {
	// 	$('.bg').attr('src', 'img/bg_new.jpg');
	// }, 41500);

	// $("#galleryls").jFlip(800,533,{background:"black",cornersTop:false}).bind("flip.jflip",function(event,index,total){
 //  		$("#l1").html("Image "+(index+1)+" of "+total);
	// });

	// $('.go_link').bind('click', switchPage);

//});
	$('#word1').css('margin-left', '-300px').animate({left:'50%', top:"10%"},1000, function() {
		$('#word2').css('margin-left', '-300px').animate({left:'50%', top:"35%"},1000, function() {
			$('#word3').css('margin-left', '-300px').animate({left:'50%', top:"60%"},1000);
			setTimeout(function() {
				$('.word-swoop').addClass('swooped');
				$('.logo').animate({left:'20%'},2000);
			},1000);
		});
	});
});  



