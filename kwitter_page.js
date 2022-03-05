//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDXtayAEf4CR35JIJNn_mfyuxx_ILC_Lsk",
      authDomain: "kwitter-social-website-342cf.firebaseapp.com",
      databaseURL: "https://kwitter-social-website-342cf-default-rtdb.firebaseio.com",
      projectId: "kwitter-social-website-342cf",
      storageBucket: "kwitter-social-website-342cf.appspot.com",
      messagingSenderId: "605120406513",
      appId: "1:605120406513:web:93c8126e3c1f479156da50"
    };
  
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location.replace("index.html");
}

function send(){
      msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      Name:user_name,
      like:0,
      message:msg
})

document.getElementById("msg") = "";
}




