var firebaseConfig = {
      apiKey: "AIzaSyDnfmp13c-Hb3yW_p_-2rxhOeQFYjD7TRQ",
      authDomain: "practies-activity.firebaseapp.com",
      databaseURL: "https://practies-activity-default-rtdb.firebaseio.com",
      projectId: "practies-activity",
      storageBucket: "practies-activity.appspot.com",
      messagingSenderId: "584902232794",
      appId: "1:584902232794:web:1b49f3ff0c14dc29d5f3e3"
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
