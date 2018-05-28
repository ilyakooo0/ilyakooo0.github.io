function update() {
	let t = $("#kollokTheor").prop("checked")
	let o = $("#kollokOpr").prop("checked")
	let k1 = $("#kollok1").prop("checked")
	let k2 = $("#kollok2").prop("checked")
	let k3 = $("#kollok3").prop("checked")
	let k4 = $("#kollok4").prop("checked")

	let out = []
	
	if (t) {
		if (k1) {
			out = out.concat(theor[0])
		}
		if (k2) {
			out = out.concat(theor[1])
		}
		if (k3) {
			out = out.concat(theor[2])
		}
		if (k4) {
			out = out.concat(theor[3])
		}
	}
	
	if (o) {
		if (k1) {
			out = out.concat(opr[0])
		}
		if (k2) {
			out = out.concat(opr[1])
		}
		if (k3) {
			out = out.concat(opr[2])
		}
		if (k4) {
			out = out.concat(opr[3])
		}
	}

	let tt = out[Math.floor(Math.random()*out.length)]

	$("#kollokText").text(tt)
}

var opr = []
var theor = []

window.onload = function() {
	
	$.getJSON("/linal/kollok_/theory.json", function(result) {
		opr = result["opr"]
		theor = result["theor"]
	});
	
	$("#fightMeKollok").click(update);
}