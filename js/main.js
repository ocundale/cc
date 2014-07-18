$(function() {
	$('#word1').css('margin-left', '-300px').animate({left:'50%', top:"10%"}, 800, function() {
		$('#word2').css('margin-left', '-300px').animate({left:'50%', top:"35%"}, 800, function() {
			$('#word3').css('margin-left', '-300px').animate({left:'50%', top:"60%"}, 800);
			setTimeout(function() {
				$('.word-swoop').addClass('swooped');
				$('.logo').animate({ left:'5%' }, 2000, function() {
					$('.cctitle').animate({ left:'0%' }, 1000);
					$('.details').fadeIn();
				});
			}, 1000);
		});
	});
});
