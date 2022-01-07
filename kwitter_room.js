const firebaseConfig = {
      apiKey: "AIzaSyD-1eQsnwbux06d8WurPThmVGp-HmhZEdk",
      authDomain: "kwitter-8e9c4.firebaseapp.com",
      databaseURL: "https://kwitter-8e9c4-default-rtdb.firebaseio.com",
      projectId: "kwitter-8e9c4",
      storageBucket: "kwitter-8e9c4.appspot.com",
      messagingSenderId: "431188364720",
      appId: "1:431188364720:web:eff58c91b64c4253755a75"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name)
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}