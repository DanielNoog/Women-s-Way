
var readmore_div = 390;

function aumento() {

	var readmore_divalt=readmore_div.toString()+"px";
	document.getElementById("why_java").style.height=readmore_divalt;

	var btn_h = document.getElementById('why_java_p');
	btn_h.style.display = "inline";
}