import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDcbUuk7bZpPeLgmBScVDQeIkFItlBI074",
  authDomain: "barber-web.firebaseapp.com",
  databaseURL: "https://barber-web.firebaseio.com",
  projectId: "barber-web",
  storageBucket: "barber-web.appspot.com",
  messagingSenderId: "687360522781"
};

firebase.initializeApp(config);
export default firebase;
