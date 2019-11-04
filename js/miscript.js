"user strict"
$(document).ready(function(){
	
	
	// Ejercicio 1
	$("#boton1").click(function(){
		var textoinserito=$("#num1_eje01").val();
		var resultado=$("#resultado1");
		resultado.html("<b>"+textoinserito+"</b>");
		//resultado.html(textoinserito).css("font-weight", "bold");
	});
    // FIN Ejercicio 1

	
	//Ejercicio 2
	
	$("#boton2").click(function(){
		$("#eje02 p").css("backgroundColor", "#666");
		$("#eje02 p").css("color", "white");
		//$("#eje02 p").css("background-color", "#666").css("color", "white");
		//$("#eje02 p").css({"background-color" : "#666", color : "white"});
	});
	// FIN Ejercicio 2

	//Ejercicio 3
	
	$("#boton4").click(function(){
		$("#eje03 .rectangulo").toggle(5000);
		//Directo con ID //$("#rectangulo").toggle(5000);
	});
	// FIN Ejercicio 3
});
