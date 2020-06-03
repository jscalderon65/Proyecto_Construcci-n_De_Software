var respuestaCorrecta = new Array("a3", "b1", "c4", "d2", "e3");
		
		function Respuestas(matriz){
		
			var numeroRespuestasOK=0;
			var numeroRespuestasKO=0;
			var solucion = document.getElementById("solucion");
			var tablaResultados ="<table border='1'>";
			
			for(j=0; j< matriz.length; j++){
			var radios = document.getElementsByName(j+1);
				for(i=0; i< radios.length;i++){
					if (radios[i].checked){
					var valor =  radios[i].value;
						if(valor == matriz[j]) {
						tablaResultados+= "<tr><td> Respuesta correcta: </td>"+ "<td>"+ valor + "</td></tr>";
						numeroRespuestasOK++;
						break;
						}else {
						tablaResultados+= "<tr><td> Respuesta incorrecta: </td><td>"+ valor + "</td></tr>";
						numeroRespuestasKO++;
						break;
						}
					}
				}
				
				
			}
			var numeroRespuestasNulas=matriz.length - (numeroRespuestasOK + numeroRespuestasKO);
			tablaResultados+="<tr><td>Resultado: </td><td>Respuestas correctas: "+numeroRespuestasOK+"<br/>Respuestas incorrectas: "+ numeroRespuestasKO+"<br/>Respuestas en blanco: "+ numeroRespuestasNulas+"</td></tr></table>";
            solucion.innerHTML = tablaResultados;

            firebase.auth().onAuthStateChanged(function (user) {
                var db = firebase.firestore();
                if (user) {
                  // User is signed in.
                  var displayName = user.displayName;
                  var email = user.email;
                  var uid = user.uid;
                }
                db.collection("Activities").doc(uid).update({
                    Preguntas_Seleccion_Multiple: {
                        Respuestas_ok: numeroRespuestasOK,
                        Respuestas_No_Ok: numeroRespuestasKO,
                        Respuestas_en_blanco: numeroRespuestasNulas
                    }
                })
                .then(function() {
                    console.log("Document successfully updated!");
                })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
              });
	}


function ComprobarP1(){
    if(document.getElementById('a3').checked)	{
        alert('Respuesta correcta; el proyectil sube hasta que la gravedad disminuye a cero la velocidad vertical.') 
    }if(document.getElementById('a1').checked){
        alert('Respuesta incorrecta; el tiempo solamente es cero en el momento del lanzamiento.')
    }if(document.getElementById('a2').checked){
        alert('Respuesta incorrecta; la velocidad horizontal es constante e igual a la componente horizontal de la velocidad de lanzamiento.')
    }if(document.getElementById('a4').checked){
        alert('Respuesta incorrecta; si la velocidad de lanzamiento es diferente de cero, el proyectil se moverá y el desplazamiento horizontal, en tal situación, nunca será cero.')
    }
}
function ComprobarP2(){
    if(document.getElementById('b1').checked)	{
        alert('Respuesta correcta, debemos determinar los valores de los desplazamientos horizontal y vertical.') 
    }if(document.getElementById('b3').checked){
        alert('Respuesta incorrecta, la velocidad total y su ángulo no determinan la localización del objeto lanzado.')
    }if(document.getElementById('b2').checked){
        alert('Respuesta incorrecta, los valores de la velocidad no definen la posición.')
    }if(document.getElementById('b4').checked){
        alert('Respuesta incorrecta, los valores de estos parámetros no determinan la ubicación del proyectil.')
    }	 
}
function ComprobarP3(){
    if(document.getElementById('c4').checked)	{
        alert('Respuesta correcta, para el movimiento de tiro horizontal la componente vertical de la velocidad inicial vale cero.') 
    }if(document.getElementById('c1').checked){
        alert('Respuesta incorrecta, el tiempo es cero en el inicio, pero este valor no determina que el movimiento sea esencialmente de tiro horizontal.')
    }if(document.getElementById('c2').checked){
        alert('Respuesta incorrecta, la velocidad vertical fue definida en la lección como la "velocidad vertical final", y como tal, nunca es cero.')
    }if(document.getElementById('c3').checked){
        alert('Respuesta incorrecta, el desplazamiento vertical es CERO en el origen, pero ese valor no define que el movimiento sea de tiro horizontal exclusivamente.')
    }	 
}
function ComprobarP4(){
    if(document.getElementById('d2').checked)	{
        alert('Respuesta correcta, en efecto, ya que se toma el valor absoluto.') 
    }if(document.getElementById('d1').checked){
        alert('Respuesta incorrecta, estos signos corresponden a la componente vertical de la velocidad.')
    }if(document.getElementById('d3').checked){
        alert('Respuesta incorrecta, la componente vertical de ascenso es siempre positiva.')
    }if(document.getElementById('d4').checked){
        alert('Respuesta incorrecta, la componente vertical en el descenso siempre es negativa.')
    } 
}
function ComprobarP5(){
    if(document.getElementById('e3').checked)	{
        alert('Respuesta correcta, también esta opción determina valores iniciales para x y para y, pero estos son CEROS.') 
    }if(document.getElementById('e1').checked){
        alert('Respuesta incorrecta, la sugerencia dada como núcleo de la estrategia didáctica recomienda una posición estándar PARA TODOS los lanzamientos de proyectiles.')
    }if(document.getElementById('e2').checked){
        alert('Respuesta incorrecta, esto implica cierta dificultad porque define valores iniciales para x y para y.')
    }if(document.getElementById('e4').checked){
        alert('Respuesta incorrecta, totalmente incorrecto. Cuando el movimiento inicia no conocemos dónde se ubica el punto de altura máxima.')
    }
}