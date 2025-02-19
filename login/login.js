// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

// Firebase Configuration (Replace with your actual credentials)
const firebaseConfig = {
    apiKey: "AIzaSyBEfoAN8oJwUeVVBhWg2_x-zFIQ091a0dU",
    authDomain: "buzora.firebaseapp.com",
    projectId: "buzora",
    storageBucket: "buzora.firebasestorage.app",
    messagingSenderId: "769706782701",
    appId: "1:769706782701:web:a80d0e40d4dfd5a181c1e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log("Firebase v11 Initialized Successfully!");

// Signup Function
document.querySelector(".signup form").addEventListener("submit", async function (event) {
    event.preventDefault();
    
    let username = document.querySelector(".signup input[name='txt']").value;
    let email = document.querySelector(".signup input[name='email']").value;
    let password = document.querySelector(".signup input[name='pswd']").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store user details in Firestore
        await setDoc(doc(db, "users", user.uid), {
            username: username,
            email: email,
            createdAt: new Date()
        });

        alert("Signup successful! You can now log in.");
        document.getElementById("chk").checked = false;
    } catch (error) {
        alert("Signup Error: " + error.message);
    }
});

// Login Function
document.querySelector(".login form").addEventListener("submit", async function (event) {
    event.preventDefault();

    let email = document.querySelector(".login input[name='email']").value;
    let password = document.querySelector(".login input[name='pswd']").value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        window.location.href = "/main/index.html"; // Redirect after login
    } catch (error) {
        alert("Login Error: " + error.message);
    }
});
