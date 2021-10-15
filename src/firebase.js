import firebase from "firebase/app" ;
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = ;
  const firebaseApp = firebase.initializeApp(
    {
      apiKey: "AIzaSyDAKK1IOX7sFS0x0QW2iXFlmzhE5N_xzgI",
      authDomain: "bssocietytest.firebaseapp.com",
      projectId: "bssocietytest",
      storageBucket: "bssocietytest.appspot.com",
      messagingSenderId: "477419502152",
      appId: "1:477419502152:web:d796004bb14c0e539e367d",
      measurementId: "G-TFKNXS9YZ2"
    }
  );
   const db = firebaseApp.firestore();
  //  const auth =firebase.auth();

   export default db ;