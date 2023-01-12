importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyDVh47R8EHofFZlewnZWpHK0kAx5KzSHr0",
  authDomain: "luxepass-44e0e.firebaseapp.com",
  projectId: "luxepass-44e0e",
  storageBucket: "luxepass-44e0e.appspot.com",
  messagingSenderId: "287494888668",
  appId: "1:287494888668:web:c952061803f1ef169b2819",
  measurementId: "G-JX4TY3J68H"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
    console.log("onBackgroundMessage", message);
});