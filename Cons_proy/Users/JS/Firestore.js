
firebase.auth().onAuthStateChanged(function (user) {
  var db = firebase.firestore();
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    if (displayName == null) {
      db.collection("Users").doc(uid).set({
        correo: email,
        Name: "Nn"
      })
        .then(function (docRef) {
          console.log("Document written " + uid + ": Correo: " + email + ", Nombre: Nn");
        })
        .catch(function (error) {
          console.error("Error adding document");
        });
    } else {
      db.collection("Users").doc(uid).set({
        correo: email,
        Name: displayName
      })
        .then(function (docRef) {
          console.log("Document written " + uid + ": Correo: " + email + ", Nombre: " + Name);
        })
        .catch(function (error) {
          console.error("Error adding document");
        });
    }
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var aux = doc.data().Name;
        console.log(aux);
      });
    });
  } else {
    // User is signed out.
    // ...
  }
});





