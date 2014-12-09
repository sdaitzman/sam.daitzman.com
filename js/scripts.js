$.typer.options = {
	highlightSpeed    : 50,
	typeSpeed         : 200,
	clearDelay        : 500,
	typeDelay         : 200,
	clearOnHighlight  : true,
	typerDataAttr     : 'data-typer-targets',
	typerInterval     : 5000
}
$('[data-typer-targets]').typer();

$('body').toggleClass('done');