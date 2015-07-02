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

	$('table tr td:nth-child(3n)').wrapInner('<p class="center"></p>');

	$(window).resize(function(){
		var headerH = $('.mamp').innerHeight(),
			tableH = $('table').innerHeight(),
			mampH = headerH + tableH;

		$('.wrapper').css('max-height', mampH);
	}).resize();

	$('.elephant').on('click', function(){
		$('html *').css({'cursor': 'url(/MAMP-Theme/images/mamp.png), auto'});
	});

});
