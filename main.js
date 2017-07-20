function dniCalcular(dni){
	var letra = "";
	var indice = dni%23;

	var tablaLetras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

	letra = tablaLetras[indice];

	return letra;
}

console.log("La letra del DNI 12312312 es: ",dniCalcular(12312312));