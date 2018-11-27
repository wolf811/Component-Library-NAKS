// Подчеркивание меню
// $('.bd-sidenav a').on("click", function(){
// 	$('a.active').removeClass('active');
// 	$(this).addClass('active');
// });

// $('.bd-toc-link').on("click", function(){
// 	$('a.active').removeClass('active');
// });

// var menu_selector = ".bd-sidenav"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню. 
// function onScroll(){
// 	var scroll_top = $(document).scrollTop();
// 	$(menu_selector + " a").each(function(){
// 		var hash = $(this).attr("href");
// 		var target = $(hash);
// 		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
// 			$(menu_selector + " a.active").removeClass("active");
// 			$(this).addClass("active");
// 		} else {
// 			$(this).removeClass("active");
// 		}
// 	});
// }
// $(document).ready(function () {
// 	$(document).on("scroll", onScroll);
// 	$("a[href^=#]").click(function(e){
// 		e.preventDefault();
// 		$(document).off("scroll");
// 		$(menu_selector + " a.active").removeClass("active");
// 		$(this).addClass("active");
// 		var hash = $(this).attr("href");
// 		var target = $(hash);
// 		$("html, body").animate({
// 		    scrollTop: target.offset().top
// 		}, 500, function(){
// 			window.location.hash = hash;
// 			$(document).on("scroll", onScroll);
// 		});
// 	});
// });

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		}
	})
});