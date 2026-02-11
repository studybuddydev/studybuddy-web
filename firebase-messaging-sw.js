// web/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyA8VfaJdlIv3fb6wRJTlocaq0ShMuaFRGA",
  authDomain: "studybuddy-a.firebaseapp.com",
  projectId: "studybuddy-a",
  storageBucket: "studybuddy-a.appspot.com",
  messagingSenderId: "415873387060",
  appId: "1:415873387060:web:35509ebc806cd97dd71861",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Optional: Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // You can customize the notification here if needed
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/icon-192.png' // Your app icon
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});