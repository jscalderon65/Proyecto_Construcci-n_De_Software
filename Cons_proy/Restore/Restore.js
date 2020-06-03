function Restore(){
    var auth = firebase.auth();
    var emailAddress = document.getElementById("Restore_email").value;
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
      alert("Se ha enviado un correo de restablecimiento de contraseña a la dirección "+ emailAddress);
      console.log("Se ha enviado un correo de restablecimiento de contraseña a la dirección "+ emailAddress);
      var emailAddress = document.getElementById("Restore_email").value="";
    }).catch(function(error) {
      // An error happened.
        alert("No se ha podido enviar el correo, ingrese una dirección valida");

    }); 
  }
  function back(){
    window.location.replace("../../Public/Authentication.html");
  }