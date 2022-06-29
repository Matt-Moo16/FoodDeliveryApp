import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBuwMHYcOOiJ_5YitifWdDEYIA6Ic-iAKM",
    authDomain: "react-native-uber-eats-c-8300a.firebaseapp.com",
    projectId: "react-native-uber-eats-c-8300a",
    storageBucket: "react-native-uber-eats-c-8300a.appspot.com",
    messagingSenderId: "432663753001",
    appId: "1:432663753001:web:63dd71aa3b255be9f68738"
  };


  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;