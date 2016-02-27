$(function(){
	$('.home-wx-erweima').hide();
	$('.home-wx-icon').hover(function(){
		$('.home-wx-erweima').show();
	},function(){
		$('.home-wx-erweima').hide();
	});
	$('.home-boxs').hover(function(){
		$(this).find('.home-box-wrapper').animate({top:'-200px'});
		return false;
	},function(){
		$(this).find('.home-box-wrapper').animate({top:'0px'});
		return false;
	});
});