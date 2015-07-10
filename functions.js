jQuery(document).ready(function($){

	// $('a').each(function(){
	// 	var href = $(this).attr('href');
	// 	$.ajax({
	// 		url: href,
	// 		success: function(data){
	// 			if (data.search('<link rel="stylesheet" href="/MAMP-Theme/style.css" type="text/css" />') >= 0) {
	// 				console.log('folder: ' + href);
	// 			};
	// 		}
	// 	});
	// });

	// $('table tr td:nth-child(3n)').wrapInner('<p class="center"></p>');

	// $(window).resize(function(){
	// 	var headerH = $('.mamp').innerHeight(),
	// 		tableH = $('table').innerHeight(),
	// 		mampH = headerH + tableH;

	// 	$('.wrapper').css('max-height', mampH);
	// }).resize();

	$('tbody tr:first-child th:nth-child(2n)').append('<a href="?C=M;O=D">Date</a>').prepend('<p>Sort by: </p>');

	$('tbody tr:first-child').nextAll().wrapAll('<div />');

	$('tbody').append('<span class="expander" />');

	$(window).on('resize load', function(){
		if($(window).width() <= 610 || $(window).height() <= 330){
			var sidebarH = $('.sidebar').height(),
			tableH = sidebarH;

			$('tbody > div').css('height', tableH);
		}else{
			var sidebarH = $('.sidebar').height(),
			tableH = sidebarH - 100;

			$('tbody > div').css('height', tableH);
		}
	});

	$('th a:nth-child(2n)').on('mouseenter', function(){
		$('tbody tr th:nth-child(2n)').addClass('left');
	});

	$('th a:nth-child(2n)').on('mouseleave', function(){
		$('tbody tr th:nth-child(2n)').removeClass('left');
	});

	$('.expander').on('click', function(){
		$('tbody').toggleClass('expand');
	});

	$('a[href*=".localized"]').parent().parent().hide();

	$(window).on('resize', function(){
		if($(window).width() <= 610){
			$('tbody').removeClass('expand');
		}
	});

	$('.accountSwitcher li').click(function(){
		var $src = $(this).find('.iframe-src').text(),
			index = $(this).index(),
			$currentAccount = $('.currentAccount li'),
			$match = $currentAccount.eq(index);

		$('.accountSwitcher li .account').removeClass('active');
		$(this).find('.account').addClass('active');
		$currentAccount.removeClass('active');
		$match.addClass('active');

		if($(this).hasClass('owner')){
			$('iframe').addClass('scootchOver');
			$('table').removeClass('scootchOver');
		}else{
			$('iframe').attr('src', $src);
			$('iframe').removeClass('scootchOver');
			$('table').addClass('scootchOver');
		}
	});

	$(window).on('resize load', function(){
		var sidebarH = $('.sidebar').height(),
		iframeH = sidebarH;

		$('iframe').css('height', iframeH);
	});
});