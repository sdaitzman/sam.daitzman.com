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

	$('[data-typer-targets]').typer()

	$('body').toggleClass('done')

	document.addEventListener("touchstart", function(){}, true)

	var $draggable = $('.draggable').draggabilly({
		containment: 'body'
	})

})
