function update() {
	write()
	
	let result = $("#diskraSosalovoNumber")
	let text = $("#diskraSosalovoText")
	
	result.text("")
	text.text("")
	
	let sr3 = parseInt($("#SR3").val())
	let kr3 = parseInt($("#KR3").val())
	let sr4 = parseInt($("#SR4").val())
	let kr4 = parseInt($("#KR4").val())
	let kdz3 = parseInt($("#KDZ3").val())
	let ekr = parseInt($("#EKR").val())
	let podbel = parseInt($("#Podbel").val())
	
	if (isNaN(sr3) ||
		isNaN(kr3) ||
		isNaN(sr4) ||
		isNaN(kr4) ||
		isNaN(kdz3)||
		isNaN(ekr) ||
		isNaN(podbel)) {
		return
	}
	
	let no3 = 0.3*sr3 + 0.35*kdz3 + 0.35*kr3
	let no4 = 0.2*sr4 + 0.8*kr4
	
	let no = Math.round(0.2*no3+0.8*no4)
	
	let eo = Math.round(0.8*Math.min(ekr, podbel) + 0.2*Math.max(ekr, podbel))
	let r = Math.round(0.8*eo + 0.2*no)
	
	result.text(r)
	if (r < 4) {
		text.text("тебя отчислили спасибо досвидания")
	}
}

window.onload = function() {
	$("#SR3").change(update)
	$("#KR3").change(update)
	$("#SR4").change(update)
	$("#KR4").change(update)
	$("#KDZ3").change(update)
	$("#EKR").change(update)
	$("#Podbel").change(update)
	$("#SR3").keyup(update)
	$("#KR3").keyup(update)
	$("#SR4").keyup(update)
	$("#KR4").keyup(update)
	$("#KDZ3").keyup(update)
	$("#EKR").keyup(update)
	$("#Podbel").keyup(update)
	
	read()
	
	update()
}

function read() {	
	let obj = Cookies.getJSON('proga.sosalovo')
	if (obj != undefined) {
		$("#SR3").val(obj.sr3)
		$("#KR3").val(obj.kr3)
		$("#SR4").val(obj.sr4)
		$("#KR4").val(obj.kr4)
		$("#KDZ3").val(obj.kdz3)
		$("#EKR").val(obj.ekr)
		$("#Podbel").val(obj.podbel)
	}
}

function write() {
	let obj = {
		"sr3": parseInt($("#SR3").val()) || 0,
		"kr3": parseInt($("#KR3").val()) || 0,
		"sr4": parseInt($("#SR4").val()) || 0,
		"kr4": parseInt($("#KR4").val()) || 0,
		"kdz3": parseInt($("#KDZ3").val()) || 0,
		"ekr": parseInt($("#EKR").val()) || 0,
		"podbel": parseInt($("#Podbel").val()) || 0
	}
	Cookies.set('proga.sosalovo', obj, { expires: 365 })
}