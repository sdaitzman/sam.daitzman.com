$(document).ready(function() {

	$.typer.options = {
		highlightSpeed: 100,
		typeSpeed: 200,
		clearDelay: 500,
		typeDelay: 200,
		clearOnHighlight: false,
		typerDataAttr: 'data-typer-targets',
		typerInterval: 3000
	}

	setTimeout(function() {
		$('[data-typer-targets]').typer()
	}, 3000)

	$('body').toggleClass('done')

	document.addEventListener("touchstart", function(){}, true)

	var $draggable = $('.draggable').draggabilly({
		containment: 'body'
	})

})