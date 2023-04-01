var firebaseConfig = {
      apiKey: "AIzaSyBVWLcLRw3w-CNDzVerVfIzc7zQ4OYD8A4",
      authDomain: "kwitter-re.firebaseapp.com",
      databaseURL: "https://kwitter-re-default-rtdb.firebaseio.com",
      projectId: "kwitter-re",
      storageBucket: "kwitter-re.appspot.com",
      messagingSenderId: "365700024414",
      appId: "1:365700024414:web:f1824da9c14c5fccb80ccf"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = " Welcome " + user_name + " ! " ;

function addroom() 
{
      room_name = document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name" 
   });          
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value',
            function (snapshot) {
                  document.getElementById("output").innerHTML = "";
                  snapshot.forEach(
                        function (childSnapshot) {
                              var Room_names = childSnapshot.key;
                              
                              console.log("Room Name - " + Room_names);
                              var row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                              document.getElementById("output").innerHTML += row;
                        });
            });
      }
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_.html";
}