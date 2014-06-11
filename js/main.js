$(".happy-side").hover(
	function() {
		$(".happy-text").css("color", "#78FF78");
	}
	, function() {
		$(".happy-text").css("color", "#5BC15B");
	}
);

$(".sad-side").hover(
	function() {
		$(".sad-text").css("color", "#9F74FF");
	}
	, function() {
		$(".sad-text").css("color", "#7757BF");
	}
);

$(".happy-side").click(
	function() {
		window.location.href="/happy.html";
	}
);

$(".sad-side").click(
	function() {
		window.location.href="/sad.html";
		
	}
);