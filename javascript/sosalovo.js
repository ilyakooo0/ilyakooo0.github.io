function update() {
	let result = $("#diskraSosalovoNumber")
	let text = $("#diskraSosalovoText")
	
	result.text("")
	text.text("")
	
	let kr3 = parseInt($("#KR3").val())
	let dz3 = parseInt($("#DZ3").val())
	let kr4 = parseInt($("#KR4").val())
	let dz4 = parseInt($("#DZ4").val())
	let mit = parseInt($("#MIT").val())
	
	if (isNaN(kr3) || isNaN(dz3) || isNaN(kr4) || isNaN(dz4) || isNaN(mit)) {
		return
	}
	
	let d = 0.62*Math.min(dz3, dz4) + 0.38*Math.max(dz3, dz4)
	let k = 0.62*Math.min(kr3, kr4) + 0.38*Math.max(kr3, kr4)
	let o = 0.62*Math.min(d, k) + 0.38*Math.max(d, k)
	let r = Math.round(0.8*Math.round(o) + 0.2*mit)
	
	result.text(r)
	if (r < 4) {
		text.text("тебя отчислили спасибо досвидания")
	}
}

window.onload = function() {
	$("#KR3").change(update)
	$("#DZ3").change(update)
	$("#KR4").change(update)
	$("#DZ4").change(update)
	$("#MIT").change(update)
	$("#KR3").keyup(update)
	$("#DZ3").keyup(update)
	$("#KR4").keyup(update)
	$("#DZ4").keyup(update)
	$("#MIT").keyup(update)
	update()
}