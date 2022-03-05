var firebaseConfig = {
      apiKey: "AIzaSyA5lYCN1lzyaeT3GAmxp7F5FZMX-iyz9LU",
      authDomain: "kwitter-582cb.firebaseapp.com",
      databaseURL: "https://kwitter-582cb-default-rtdb.firebaseio.com",
      projectId: "kwitter-582cb",
      storageBucket: "kwitter-582cb.appspot.com",
      messagingSenderId: "520768382455",
      appId: "1:520768382455:web:342fbf26b15f11f835baf2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
