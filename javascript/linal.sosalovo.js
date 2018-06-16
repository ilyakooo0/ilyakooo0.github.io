function update() {
	write()
	
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
	
	let no = Math.round(0.35*kr3 + 0.4*kollok + 0.12*sem + 0.13*kdz)
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
	
	read()
	
	update()
}

function read() {	
	let obj = Cookies.getJSON('linal.sosalovo')
	if (obj != undefined) {
		$("#KDZ").val(obj.kdz)
		$("#Sem").val(obj.sem)
		$("#Kollok").val(obj.kollok)
		$("#KR3").val(obj.kr3)
		$("#Egz").val(obj.egz)
	}
}

function write() {
	let obj = {
		"kdz": parseInt($("#KDZ").val()) || 0,
		"sem": parseInt($("#Sem").val()) || 0,
		"kollok": parseInt($("#Kollok").val()) || 0,
		"kr3": parseInt($("#KR3").val()) || 0,
		"egz": parseInt($("#Egz").val()) || 0
	}
	Cookies.set('linal.sosalovo', obj)
}