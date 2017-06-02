$(document).ready(function(){
	$('#background_image').hide();
	$('#player_select').hide();
	$('#player_div_left').hide();
	$('#player_div_right').hide();
	$('#beach').hover(
		function(){
			var temp = $('#background_image').attr('alt_1');
			$('#background_image').attr("src", temp);
			$('#background_image').show();
	});
	$('#planet').hover(
		function(){
			var temp = $('#background_image').attr('alt_2');
			$('#background_image').attr("src", temp);
			$('#background_image').show();
	});
	$('#dojo').hover(
		function(){
			var temp = $('#background_image').attr('alt_3');
			$('#background_image').attr("src", temp);
			$('#background_image').show();
	});
	$('#forest').hover(
		function(){
			var temp = $('#background_image').attr('alt_4');
			$('#background_image').attr("src", temp);
			$('#background_image').show();
	});
	$('#matrix').hover(
		function(){
			var temp = $('#background_image').attr('alt_5');
			$('#background_image').attr("src", temp);
			$('#background_image').show();
	});
	$('#snow').hover(
		function(){
			var temp = $('#background_image').attr('alt_6');
			$('#background_image').attr("src", temp);
			$('#background_image').show();
	});
	$('.arena_button').click(
		function(){
			$('#arena_select').hide();
			$('#player_select').show();
	});
	$('#select_ninja_left').change(
		function(){
			var temp = $("#select_ninja_left option:selected").attr('img_src');
			$('#player_image_left').attr('src', temp);
			$('#player_div_left').show();
	});
	$('#select_ninja_right').change(
		function(){
			var temp = $("#select_ninja_right option:selected").attr('img_src');
			$('#player_image_right').attr('src', temp);
			$('#player_div_right').show();
	});

});





