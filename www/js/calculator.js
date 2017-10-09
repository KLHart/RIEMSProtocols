document.addEventListener('DOMContentReady', function () {
	console.log("CONTENT READY");
	document.getElementById('convert_weight').addEventListener('click', weightConverter);
});


function weightConverter() {
	console.log("WE MADE IT HERE");
	var input_weight = document.getElementById("weight_input").val();
    document.getElementById("weight_ouput").innerHTML = input_weight/2.2;
}

function dosageConveter(val) {
	document.getElementById("dosage_output").innerHTML = val * document.getElementById("weight_ouput").innerHTML.value
}
