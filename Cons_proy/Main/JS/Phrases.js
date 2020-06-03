var Quotation=new Array()
Quotation[0] = "- El ignorante afirma, el sabio duda y reflexiona. -Aristóteles";
Quotation[1] = "-  La educación es el encedido de una llama, no el llenado de un recipiente. -Sócrates";
Quotation[2] = "-  La virtud, estudio y alegria son tres hermanos que no deben vivir separados. -Voltaire";
Quotation[3] = "-  La verdadera sabiduría está en reconocer la propia ignorancia. -Sócrates";
Quotation[4] = "-  No es el conocimiento, sino el acto de aprendizaje, y no la posesión, sino el acto de llegar allí, que concede el mayor disfrute. -Gauss";
Quotation[5] = "-  Los encantos de esta ciencia sublime, las matemáticas, sólo se le revelan a aquellos que tienen el valor de profundizar en ella. -Gauss";
Quotation[6] = "-  Si otros pensaran tan duro como lo hice, obtendrían resultados similares. -Newton";
Quotation[7] = "-  Física, ten mucho cuidado con la metafísica. -Newton";
Quotation[8] = "-  El ignorante afirma, el sabio duda y reflexiona. -Aristóteles";
Quotation[9] = "- La esperanza es el peor de los males, pues prolonga el tormento del hombre. -Nietszche";
Quotation[10] = "-La mejor manera de entender, es usando buenos ejemplos.     -Newton";
Quotation[11] = "-  La duda es la madre de la invención - Galileo";
Quotation[12] = "- Cogito, ergo sum -Descartes";
Quotation[13] = "- Daría todo lo que sé por la mitad de lo que ignoro. -Descartes";
Quotation[14] = "-  No basta con tener buen ingenio, lo principal es aplicarlo bien. -Descartes";

// Calculamos la longitud el vector (número de frases del stock)
var Q = Quotation.length;

// Obtener un número aleatorio entre 1 y la cantidad de frases incluidas
//Utilizando la clase Math y el método random().
var whichQuotation=Math.round(Math.random()*(Q-1));

// Creamos una función para mostrar la frase

document.getElementById("Frases").innerHTML=Quotation[whichQuotation];
function info(){
    alert("Desarrolladores: "+
    " Jhonn Calderon, " +
    " Santiago Pujana y" + 
    " Fabián Sandoval ");
}
