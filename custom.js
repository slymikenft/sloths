$('#toggle').click(function () {
	$(this).toggleClass('active');
	$('#overlayMobile').toggleClass('open');
});
function closeMenuOnClick() {
	$('#toggle').toggleClass('active');
	$('#overlayMobile').toggleClass('open');
}