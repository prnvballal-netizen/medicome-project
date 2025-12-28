import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDWoLIYRpiMhUuZZomeRiDUq5Y99rH_TQU",
    authDomain: "medicome-backend.firebaseapp.com",
    projectId: "medicome-backend",
    storageBucket: "medicome-backend.firebasestorage.app",
    messagingSenderId: "661794508120",
    appId: "1:661794508120:web:4d3d97f0651cfaaaef692d"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


