function update() {
	let result = $("#diskraSosalovoNumber")
	let text = $("#diskraSosalovoText")
	
	result.text("")
	text.text("")
	
	let kdz = parseInt($("#KDZ").val())
	let sem = parseInt($("#Sem").val())
	let kollok = parseInt($("#Kollok").val())
	let kr3 = parseInt($("#KR3").val())
	let egz = parseInt($("#Egz").val())
	
	if (isNaN(kdz) || isNaN(sem) || isNaN(kollok) || isNaN(kr3) || isNaN(egz)) {
		return
	}
	
	let no = Math.round(0.35*kr3 + 0.45*kollok + 0.1*sem + 0.1*kdz)
	let r = Math.round(0.7*no + 0.3*egz)
	
	result.text(r)
	if (r < 4) {
		text.text("тебя отчислили спасибо досвидания")
	}
}

window.onload = function() {
	$("#KDZ").change(update)
	$("#Sem").change(update)
	$("#Kollok").change(update)
	$("#KR3").change(update)
	$("#Egz").change(update)
	$("#KDZ").keyup(update)
	$("#Sem").keyup(update)
	$("#Kollok").keyup(update)
	$("#KR3").keyup(update)
	$("#Egz").keyup(update)
	update()
}