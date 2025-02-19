// Firebase Configuration - Replace with your Firebase credentials
const firebaseConfig = {
    apiKey: "AIzaSyBEfoAN8oJwUeVVBhWg2_x-zFIQ091a0dU",
    authDomain: "buzora.firebaseapp.com",
    projectId: "buzora",
    storageBucket: "buzora.firebasestorage.app",
    messagingSenderId: "769706782701",
    appId: "1:769706782701:web:a80d0e40d4dfd5a181c1e4"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Signup Function
document.querySelector(".signup form").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = event.target[0].value;
    let email = event.target[1].value;
    let password = event.target[2].value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;

            // Save user data to Firestore
            return db.collection("users").doc(user.uid).set({
                username: username,
                email: email
            });
        })
        .then(() => {
            alert("Signup successful! You can now log in.");
            document.getElementById("chk").checked = false; // Switch to login form
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

// Login Function
document.querySelector(".login form").addEventListener("submit", function (event) {
    event.preventDefault();

    let email = event.target[0].value;
    let password = event.target[1].value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login successful!");
            window.location.href = "/main/index.html"; // Redirect to dashboard page
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});
