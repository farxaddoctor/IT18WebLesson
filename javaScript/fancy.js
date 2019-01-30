$(document).ready(function(){
	$("img").click(function(){
		is = $(this).attr("src");
		iw = $(this).width();
		ih = $(this).height();
		it = $(this).offset().top - $(window).scrollTop();
		il = $(this).offset().left - $(window).scrollLeft();
		
		nh = .9 * $(window).height();
		nw = nh*iw/ih;
		nl = ($(window).width() - nw)/2;
		nt = ($(window).height() - nh)/2;
	
		$("#fancy").remove();
		$("body").append('<div id="fancy"></div>');
		$("#fancy").css({
			"width" : iw+"px",
			"height" : ih+"px",
			"background" : "url('"+is+"') no-repeat center/cover",
			"position" : "fixed",
			"top" : it+"px",
			"left" : il+"px",
			"opacity" : "0"
		});
		
		$("#fancy").animate({
			"height": nh+"px",
			"width": nw+"px",
			"opacity" : "1",
			"top": nt+"px",
			"left": nl+"px"
		});
		
		$("#fancy").click(function(){
			$("#fancy").animate(
				{"opacity" : "0"}, "slow",
				"linear", function() {
					$(this).remove();
				}
			);
		
		})
		
	});
});