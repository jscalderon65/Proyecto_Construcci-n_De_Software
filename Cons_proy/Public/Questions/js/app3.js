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
                    "matematica.funcion_cuadratica.Preguntas_Seleccion_Multiple.Respuestas_ok": numeroRespuestasOK,
                    "matematica.funcion_cuadratica.Preguntas_Seleccion_Multiple.Respuestas_No_Ok": numeroRespuestasKO,
                    "matematica.funcion_cuadratica.Preguntas_Seleccion_Multiple.Respuestas_en_blanco": numeroRespuestasNulas
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
        alert('Respuesta correcta.') 
    }if(document.getElementById('a1').checked){
        alert('Respuesta incorrecta.')
    }if(document.getElementById('a2').checked){
        alert('Respuesta incorrecta.')
    }if(document.getElementById('a4').checked){
        alert('Respuesta incorrecta.')
    }
}
function ComprobarP2(){
    if(document.getElementById('b1').checked)	{
        alert('Respuesta correcta.') 
    }if(document.getElementById('b3').checked){
        alert('Respuesta incorrecta.')
    }if(document.getElementById('b2').checked){
        alert('Respuesta incorrecta.')
    }if(document.getElementById('b4').checked){
        alert('Respuesta incorrecta.')
    }	 
}
function ComprobarP3(){
    if(document.getElementById('c4').checked)	{
        alert('Respuesta correcta.') 
    }if(document.getElementById('c1').checked){
        alert('Respuesta incorrecta.')
    }if(document.getElementById('c2').checked){
        alert('Respuesta incorrecta.')
    }if(document.getElementById('c3').checked){
        alert('Respuesta incorrecta.')
    }	 
}
function ComprobarP4(){
    if(document.getElementById('d2').checked)	{
        alert('Respuesta correcta.') 
    }if(document.getElementById('d1').checked){
        alert('Respuesta incorrecta.')
    }if(document.getElementById('d3').checked){
        alert('Respuesta incorrecta.')
    }if(document.getElementById('d4').checked){
        alert('Respuesta incorrecta, la componente vertical en el descenso siempre es negativa.')
    } 
}
function ComprobarP5(){
    if(document.getElementById('e3').checked)	{
        alert('Respuesta correcta.') 
    }if(document.getElementById('e1').checked){
        alert('Respuesta incorrecta.')
    }if(document.getElementById('e2').checked){
        alert('Respuesta incorrecta.')
    }if(document.getElementById('e4').checked){
        alert('Respuesta incorrecta.')
    }
}