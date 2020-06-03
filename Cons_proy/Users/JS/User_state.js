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
    console.log(photoURL);
    document.getElementById("Correo").innerHTML = `Correo: ${user.email}`;
    if(displayName==null){
      document.getElementById("Nombre").innerHTML = `Nombre: Usuario`;  
    }else{
      document.getElementById("Nombre").innerHTML = `Nombre: ${user.displayName}`;
    }
    document.getElementById("GetOut").style.display = 'inline';
    document.getElementById("Progress").style.display = 'inline';
    document.getElementById("Main").style.display = 'inline';
    document.getElementById("modifica_aux").style.display = 'inline';
    document.getElementById("Sign").style.display = 'none';
    document.getElementById("dataa").style.display = 'inline';
    if(photoURL==null){
      document.getElementById("imgg").style.display = 'inline';
    }else{
      document.getElementById("imgg").style.display = 'inline';
      document.getElementById("imgg").src = photoURL;
    }
  } else {
    document.getElementById("Correo").innerHTML = "No hay nadie Logueado";
    document.getElementById("Sign").style.display = 'inline';
    document.getElementById("GetOut").style.display = 'none';
    document.getElementById("modifica_aux").style.display = 'none';
    document.getElementById("Progress").style.display = 'none';
    document.getElementById("Main").style.display = 'none';
    document.getElementById("Nombre").style.display = 'none';
    document.getElementById("dataa").style.display = 'none';
    document.getElementById("imgg").style.display = 'none';
    // User is signed out.
    // ...
  }
});
function Salir() {
  firebase.auth().signOut().then(function () {
    alert("Se ha cerrado sesión")
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
  });
}







