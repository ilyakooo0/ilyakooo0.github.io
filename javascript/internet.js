function update() {
	$("input").each(function() {
		let r = Math.random() >= 0.5;
		$(this).prop("checked", r);
	})
}

window.onload = function() {
	$("input").each(function() {
		$(this).change(function () {
			let w = $(this).prop("checked")
			update()
			$(this).prop("checked", w);
		})
	})
	$("input").each(function() {
		$(this).prop("checked", true);
	})
}
