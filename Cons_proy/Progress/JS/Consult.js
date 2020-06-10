function show_result_physic() {
  document.getElementById("F_Tema1").style.display = 'inline';
  document.getElementById("M_Tema1").style.display = 'none';
}
function show_result_math() {
  document.getElementById("M_Tema1").style.display = 'inline';
  document.getElementById("F_Tema1").style.display = 'none';
}
function ocultar() {
  document.getElementById("M_Tema1").style.display = 'none';
  document.getElementById("P_M_T1").style.display = 'none';
  document.getElementById("F_Tema1").style.display = 'none';
  document.getElementById("P_M_T1").style.display = 'none';
}
function show_F_tema1() {
  firebase.auth().onAuthStateChanged(function (user) {
    var db = firebase.firestore();
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var uid = user.uid;

      db.collection("Activities").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id == uid) {

            document.getElementById("IT1_S").innerHTML = `Incorrectas: ${doc.data().fisica.tiro_parabolico_y_horizontal.Preguntas_Seleccion_Multiple.Respuestas_No_Ok}`;

            document.getElementById("BT1_S").innerHTML = `Correctas: ${doc.data().fisica.tiro_parabolico_y_horizontal.Preguntas_Seleccion_Multiple.Respuestas_ok}`;

            document.getElementById("CT1_S").innerHTML = `No respondidas: ${doc.data().fisica.tiro_parabolico_y_horizontal.Preguntas_Seleccion_Multiple.Respuestas_en_blanco}`;



            document.getElementById("IT1_FV").innerHTML = `Incorrectas: ${doc.data().fisica.tiro_parabolico_y_horizontal.Preguntas_Falso_Verdadero.Respuestas_No_Ok}`;

            document.getElementById("BT1_FV").innerHTML = `Correctas: ${doc.data().fisica.tiro_parabolico_y_horizontal.Preguntas_Falso_Verdadero.Respuestas_ok}`;

            document.getElementById("CT1_FV").innerHTML = `No respondidas: ${doc.data().fisica.tiro_parabolico_y_horizontal.Preguntas_Falso_Verdadero.Respuestas_en_blanco}`;

          }
        });
      })
    }
  });

  document.getElementById("P_F_T1").style.display = 'inline';
}

function show_M_tema1() {
  firebase.auth().onAuthStateChanged(function (user) {
    var db = firebase.firestore();
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var uid = user.uid;

      db.collection("Activities").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id == uid) {

            document.getElementById("MIT1_S").innerHTML = `Incorrectas: ${doc.data().matematica.funcion_cuadratica.Preguntas_Seleccion_Multiple.Respuestas_No_Ok}`;

            document.getElementById("MBT1_S").innerHTML = `Correctas: ${doc.data().matematica.funcion_cuadratica.Preguntas_Seleccion_Multiple.Respuestas_ok}`;

            document.getElementById("MCT1_S").innerHTML = `No respondidas: ${doc.data().matematica.funcion_cuadratica.Preguntas_Seleccion_Multiple.Respuestas_en_blanco}`;

          }
        });
      })
    }
  });

  document.getElementById("P_M_T1").style.display = 'inline';
}
