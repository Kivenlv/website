$(function(){
	$('.main-contnet-boxs').each(function(){
		$(this).click(function(){
			var index = $(this).index();
			var Img = ['./images/main-icon1-da.jpg','./images/main-icon2-da.jpg','./images/main-icon3-da.jpg','./images/main-icon4-da.jpg','images/main-icon5-da.jpg'];
			$('.eject').show().find('img').attr("src",Img[index]);
			return false;
		})
	});
	$(document).click(function(){
		$('.eject').hide();
		
	})
});