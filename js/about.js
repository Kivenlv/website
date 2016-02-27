$(function(){
	$('.home-wx-erweima').hide();
	$('.home-wx-icon').hover(function(){
		$('.home-wx-erweima').show();
	},function(){
		$('.home-wx-erweima').hide();
	});

    var move = function move(obj){
        $(window).scroll(function(){
            // console.log($(window).scrollTop());
            $(obj).each(function(){
                var offTop =  $(this).offset().top;
                var scrTop = $(window).scrollTop();
                var len = offTop-scrTop;
                if(len <= $(window).height()-100){
                    $(this).find('.about-main-boxsL').animate({left:'0',opacity:'1',filter:'alpaha(opacity=1)'});
                    $(this).find('.about-main-boxsR').animate({right:'0',opacity:'1',filter:'alpaha(opacity=1)'});
                }
            });
        });
    };
    move('.about-main-boxs');
});


// $(function(){
//     $('.home-wx-erweima').hide();
//     $('.home-wx-icon').hover(function(){
//         $('.home-wx-erweima').show();
//     },function(){
//         $('.home-wx-erweima').hide();
//     });

//     function move(){
//         $(window).scroll(function(){
//             // console.log($(window).scrollTop());
//             $('.about-main-boxs').each(function(){
//                 var offTop =  $(this).offset().top;
//                 var scrTop = $(window).scrollTop();
//                 var len = offTop-scrTop;
//                 if(len <= $(window).height()-100){
//                     $(this).find('.about-main-boxsL').animate({left:'0',opacity:'1',filter:'alpaha(opacity=1)'});
//                     $(this).find('.about-main-boxsR').animate({right:'0',opacity:'1',filter:'alpaha(opacity=1)'});
//                 }
//             });
//         });

//     };
//     move('.about-main-boxs');
// });