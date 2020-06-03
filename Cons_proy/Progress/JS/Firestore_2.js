firebase.auth().onAuthStateChanged(function (user) {
    var db = firebase.firestore();
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var uid = user.uid;
    }
  var docRef = db.collection("Activities").doc(uid);
  docRef.get().then(function(doc) {
      if (doc.exists) {
          console.log("It works");
      } else {
          // doc.data() will be undefined in this case
          db.collection("Activities").doc(uid).set({
            Preguntas_Seleccion_Multiple: {
                Respuestas_ok: 0,
                Respuestas_No_Ok: 0,
                Respuestas_en_blanco: 5
            },
            Preguntas_Falso_Verdadero: {
                Respuestas_ok: 0,
                Respuestas_No_Ok: 0,
                Respuestas_en_blanco: 10
            }
        })
          .then(function (docRef) {
            console.log("Document written");
          })
          .catch(function (error) {
            console.error("Error adding document");
        });
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
      alert("intenta resolver todas las actividades!")
  });
   
  });





