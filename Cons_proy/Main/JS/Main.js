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
      if(displayName==null){
        document.getElementById("Nombre").innerHTML = `Usuario`;  
      }else{
        document.getElementById("Nombre").innerHTML = `${user.displayName}`;
      }
    } else {
      // User is signed out.
      // ...
    }
  });

  
  
  
  
  
  
  
  