import firebase from "firebase";

  firebase.initializeApp({
  apiKey: "AIzaSyDjzbsXNknmACNF9wHTvZ4WZhDHfXw-Uc0",
  authDomain: "online-store-admin-panel.firebaseapp.com",
  databaseURL: "https://online-store-admin-panel.firebaseio.com",
  projectId: "online-store-admin-panel",
  storageBucket: "online-store-admin-panel.appspot.com",
  messagingSenderId: "278600664541",
  appId: "1:278600664541:web:a870d569350849d6c36234"
});
const func = firebase.functions();
export default func;