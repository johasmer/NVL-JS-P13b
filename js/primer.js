//
//decir si palindromo si es frase hay kke eliminar espacios
//Tip: If an empty string ("") is used as the separator, the string is split between each character.
function esPal(txt){
	//kitams espacios y separamos por chars
	txt=txt.replace(" ", "");
	var aux=txt.split("");
	//console.log(aux);
	for (var i = 0; i <aux.length; i++) {
		if (aux[i]!= aux[aux.length-i-1]) {
			return false;
			console.log('No es palindromo');
		}
	}
	//si no ha retornado false no paraa el bucle pero si para sin fallo keremos ke
	//devuelva cierto
	return true;
	//pero esta despues del return no llega a este log
		console.log("palindromo!!:"+tx);
	
}
console.log(esPal("oro oro"));
