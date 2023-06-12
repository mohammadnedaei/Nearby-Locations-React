// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyCfOrP2Rt0jHtndGHv_2jlopDja0JRGr-k",
    authDomain: "nearbylocations-338908.firebaseapp.com",
    projectId: "nearbylocations-338908",
    storageBucket: "nearbylocations-338908.appspot.com",
    messagingSenderId: "43957067415",
    appId: "1:43957067415:web:30cdfa89f61b4c079593d2",
    measurementId: "G-FPHZR133VZ"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});
