//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDxuGYyOIfI9s9ZePFSX9ulsHYJL5YKjd8",
      authDomain: "class94kwitter-app.firebaseapp.com",
      databaseURL: "https://class94kwitter-app-default-rtdb.firebaseio.com",
      projectId: "class94kwitter-app",
      storageBucket: "class94kwitter-app.appspot.com",
      messagingSenderId: "838665090968",
      appId: "1:838665090968:web:bf9960eb57dcd5cc11dded"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

room_name=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });
    document.getElementById("msg").value="";
}