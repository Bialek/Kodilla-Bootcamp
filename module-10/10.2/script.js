$(function(){
	$("span:even").css("color", "red");
});

$(function(){
	var paragraphs = $("p");
	paragraphs.each(function(index, elements) {
		var button = '<button class="btn" data-tmp="' + index + '">click me</button>';
		($(element)).append(button);

	});
});