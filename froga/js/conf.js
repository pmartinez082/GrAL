import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyBSiSM_42iiE3qphpfLcwsSVgBSakH8UMY",

  authDomain: "froga-5fb67.firebaseapp.com",

  projectId: "froga-5fb67",

  storageBucket: "froga-5fb67.appspot.com",

  messagingSenderId: "926225404109",

  appId: "1:926225404109:web:9b1a8e4267f8771458d984"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { db, storage, analytics, auth };

console.log("Firebase konexioa ondo ezarri da");
