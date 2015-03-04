jQuery(document).ready(function($){

	$('a').each(function(){
		var href = $(this).attr('href');
		$.ajax({
			url: href,
			success: function(data){
				if (data.search('<link rel="stylesheet" href="/MAMP-Theme/style.css" type="text/css" />') >= 0) {
					console.log('folder: ' + href);
				};
			}
		});
	});

});