function update() {
	write()
	
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
	
	let d = Math.round(0.62*Math.min(dz3, dz4) + 0.38*Math.max(dz3, dz4))
	
	let k = Math.round(0.62*Math.min(kr3, kr4) + 0.38*Math.max(kr3, kr4))
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
	
	read()
	
	update()
}

function read() {	
	let obj = Cookies.getJSON('diskra.sosalovo')
	if (obj != undefined) {
		$("#KR3").val(obj.kr3)
		$("#DZ3").val(obj.dz3)
		$("#KR4").val(obj.kr4)
		$("#DZ4").val(obj.dz4)
		$("#MIT").val(obj.mit)
	}
}

function write() {
	let obj = {
		"kr3": parseInt($("#KR3").val()) || 0,
		"dz3": parseInt($("#DZ3").val()) || 0,
		"kr4": parseInt($("#KR4").val()) || 0,
		"dz4": parseInt($("#DZ4").val()) || 0,
		"mit": parseInt($("#MIT").val()) || 0
	}
	Cookies.set('diskra.sosalovo', obj)
}