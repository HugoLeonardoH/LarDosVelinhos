import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAiVa-a9Lcw75Oy1B-RhsPwR-82_S_yx3Y",
  authDomain: "farmacia-dffbf.firebaseapp.com",
  databaseURL: "https://farmacia-dffbf.firebaseio.com",
  projectId: "farmacia-dffbf",
  storageBucket: "farmacia-dffbf.appspot.com",
  messagingSenderId: "247771258356",
  appId: "1:247771258356:web:eaa7e8ee858fda67326da1",
  measurementId: "G-W4DG5LC564"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);