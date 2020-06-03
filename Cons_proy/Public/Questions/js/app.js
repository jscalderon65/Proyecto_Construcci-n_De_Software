var respuestaCorrecta = new Array("a1", "b1", "c2", "d2", "e1", "f2", "g2", "h1", "i1", "j2")

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
                    Preguntas_Falso_Verdadero: {
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
    if(document.getElementById('a1').checked)	{
        alert('Respuesta correcta') 
    }if(document.getElementById('a2').checked){
        alert('Respuesta incorrecta')
    }	 
}
function ComprobarP2(){
    if(document.getElementById('b1').checked)	{
        alert('Respuesta correcta') 
    }if(document.getElementById('b2').checked){
        alert('Respuesta incorrecta')
    }	 
}
function ComprobarP3(){
    if(document.getElementById('c2').checked)	{
        alert('Respuesta correcta') 
    }if(document.getElementById('c1').checked){
        alert('Respuesta incorrecta')
    }	 
}
function ComprobarP4(){
    if(document.getElementById('d2').checked)	{
        alert('Respuesta correcta') 
    }if(document.getElementById('d1').checked){
        alert('Respuesta incorrecta')
    }	 
}
function ComprobarP5(){
    if(document.getElementById('e1').checked)	{
        alert('Respuesta correcta') 
    }if(document.getElementById('e2').checked){
        alert('Respuesta incorrecta')
    }	 
}
function ComprobarP6(){
    if(document.getElementById('f2').checked)	{
        alert('Respuesta correcta') 
    }if(document.getElementById('f1').checked){
        alert('Respuesta incorrecta')
    }	 
}
function ComprobarP7(){
    if(document.getElementById('g2').checked)	{
        alert('Respuesta correcta') 
    }if(document.getElementById('g1').checked){
        alert('Respuesta incorrecta')
    }	 
}
function ComprobarP8(){
    if(document.getElementById('h1').checked)	{
        alert('Respuesta correcta') 
    }if(document.getElementById('h2').checked){
        alert('Respuesta incorrecta')
    }	 
}
function ComprobarP9(){
    if(document.getElementById('i1').checked)	{
        alert('Respuesta correcta') 
    }if(document.getElementById('i2').checked){
        alert('Respuesta incorrecta')
    }	 
}
function ComprobarP10(){
    if(document.getElementById('j2').checked)	{
        alert('Respuesta correcta') 
    }if(document.getElementById('j1').checked){
        alert('Respuesta incorrecta')
    }	 
}

