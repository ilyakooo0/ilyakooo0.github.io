function generateStore() {
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
	
	return out
}

function update() {
	
	let obj = Cookies.getJSON('kollok');
	
	let s = generateStore()
	
	let ii = [...s.keys()].filter(function(elt) {return obj.store.indexOf(elt) == -1})
	
	if (ii.length == 0) {
		obj.store = []
		ii = [...s.keys()]
	}
	
	let i = Math.floor(Math.random()*ii.length)
	
	let tt = s.splice(ii[i], 1)[0]
	obj.store.push(ii[i])

	$("#kollokText").text(tt)
	
	Cookies.set('kollok', obj);
}

function reevaluate() {
	let t = $("#kollokTheor").prop("checked")
	let o = $("#kollokOpr").prop("checked")
	let k1 = $("#kollok1").prop("checked")
	let k2 = $("#kollok2").prop("checked")
	let k3 = $("#kollok3").prop("checked")
	let k4 = $("#kollok4").prop("checked")
	let obj = Cookies.getJSON('kollok');
	if ((obj == undefined) || !(t == obj.t && o == obj.o && k1 == obj.k1 && k2 == obj.k2 && k3 == obj.k3 && k4 == obj.k4)) {
		obj = {
			"t": t,
			"o": o,
			"k1": k1,
			"k2": k2,
			"k3": k3,
			"k4": k4,
			"store": []
		}
	}
	Cookies.set('kollok', obj);
}

function read() {
	let obj = Cookies.getJSON('kollok');

	if (obj != undefined) {
		$("#kollokTheor").prop("checked", obj.t);
		$("#kollokOpr").prop("checked", obj.o);
		$("#kollok1").prop("checked", obj.k1);
		$("#kollok2").prop("checked", obj.k2);
		$("#kollok3").prop("checked", obj.k3);
		$("#kollok4").prop("checked", obj.k4);
	}

}

var opr = []
var theor = []

window.onload = function() {
	read()

	$.getJSON("/linal/kollok_/theory.json", function(result) {
		opr = result["opr"]
		theor = result["theor"]
		
		reevaluate()
		
		$("#kollokTheor").change(reevaluate)
		$("#kollokOpr").change(reevaluate)
		$("#kollok1").change(reevaluate)
		$("#kollok2").change(reevaluate)
		$("#kollok3").change(reevaluate)
		$("#kollok4").change(reevaluate)
		$("#fightMeKollok").click(update);

	});
}