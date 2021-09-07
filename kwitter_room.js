
var firebaseConfig = {
      apiKey: "AIzaSyBxSWjKczY5DYEhwnNHXGp8qFn68VtuYPk",
      authDomain: "kwitter-database-28f11.firebaseapp.com",
      databaseURL: "https://kwitter-database-28f11-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-28f11",
      storageBucket: "kwitter-database-28f11.appspot.com",
      messagingSenderId: "827514624277",
      appId: "1:827514624277:web:b4acbe347e490ac75bb11c"
    };
    
    
        

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
