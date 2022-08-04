//ADD YOUR FIREBASE LINKS HERE
 
var firebaseConfig = {
      apiKey: "AIzaSyAx4BX-1oxN-51XsKoAZ5-CKeD0w1PQfXM",
      authDomain: "kwitter-4d9f1.firebaseapp.com",
      databaseURL: "https://kwitter-4d9f1-default-rtdb.firebaseio.com",
      projectId: "kwitter-4d9f1",
      storageBucket: "kwitter-4d9f1.appspot.com",
      messagingSenderId: "329547716687",
      appId: "1:329547716687:web:17e1a65c8c6be989e6723a"
    };
    
   
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("User_Name");
  
    document.getElementById("wel_come").innerHTML="Welcome " + user_name;
  
    function addRoom(){
  
       New_Room = document.getElementById("new_room").value;
  
      // to create the room in firebase using child().update() with specific room name as child
  
       firebase.database().ref("/").child(New_Room).update({
             purpose : "Adding Room Name"
       });
  
      localStorage.setItem("room_select",New_Room);
      window.location="kwitter_page.html";
              
    }
  
 function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("trending_rooms").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                 
            childKey  = childSnapshot.key;
            Room_names = childKey;
      //Start code
            row_room = "<div class='room_name' id = " + Room_names + " onclick='moveTo_room(this.id) ' > #"+ Room_names +"</div> <hr>";
  
            document.getElementById("trending_rooms").innerHTML =   document.getElementById("trending_rooms").innerHTML + row_room;
      //End code
            });
      });
 }
 getData();
  
 function  moveTo_room(selected_room){
     
      localStorage.setItem("room_select", selected_room);
  
      window.location="kwitter_page.html";
  
 }
  
 function  logout(){
     
      localStorage.removeItem("User_Name");
      window.location  = "index.html";
 }
  
  
 