
function Salir() {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
  
    }).catch(function (error) {
      // An error happened.
    });
  }
  function eliminar(){
    var user = firebase.auth().currentUser;
    user.delete().then(function() {
      alert("Se ha borrado el usuario");
    }).catch(function(error) {
      alert("Error no hay nadie");
    });
  }
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      document.getElementById("login").innerHTML = `Se ha logueado ${user.email}`;
      document.getElementById("Delete").style.display = 'inline';
      document.getElementById("GetOut").style.display = 'inline';
      
    } else {
      document.getElementById("login").innerHTML = "No hay nadie Logueado";
      document.getElementById("Delete").style.display = 'none';
      document.getElementById("GetOut").style.display = 'none';
      // User is signed out.
      // ...
    }
  });

  
 