import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEfoAN8oJwUeVVBhWg2_x-zFIQ091a0dU",
  authDomain: "buzora.firebaseapp.com",
  projectId: "buzora",
  storageBucket: "buzora.firebasestorage.app",
  messagingSenderId: "769706782701",
  appId: "1:769706782701:web:a80d0e40d4dfd5a181c1e4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
