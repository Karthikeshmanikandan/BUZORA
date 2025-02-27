import { db, collection, addDoc } from "./firebase-config.js";

// Questions specifically for students planning a startup
const questions = [
    "What inspired your startup idea?",
    "What problem does your startup solve?",
    "How do you plan to validate your business idea?",
    "What challenges do you anticipate in starting a business?",
    "Who is your target audience, and how will you reach them?",
    "What resources or mentorship do you need to succeed?",
    "How will you fund your startup initially?",
    "What are your short-term and long-term business goals?",
    "How do you plan to differentiate from competitors?",
    "What support do you need to launch successfully?"
];

// Form container
const questionsContainer = document.getElementById("questionsContainer");

// Add personal details fields
const form = document.getElementById("businessForm");
form.insertAdjacentHTML("afterbegin", `
    <label>Name:</label>
    <input type="text" name="userName" required>
    
    <label>Company Name (if any):</label>
    <input type="text" name="companyName">
    
    <label>Email:</label>
    <input type="email" name="userEmail" required>
    
    <label>Years of Experience (if any):</label>
    <input type="number" name="userExperience" min="0">
`);

// Generate form questions
// Generate form questions
questions.forEach((question, index) => { // ✅ Fix: Change 'tasks' to 'questions'
    const div = document.createElement("div");
    div.classList.add("question");

    const label = document.createElement("label");
    label.textContent = question;

    const textarea = document.createElement("textarea");
    textarea.setAttribute("name", `answer${index}`);

    div.appendChild(label);
    div.appendChild(textarea);
    questionsContainer.appendChild(div);
});


// Handle form submission
document.getElementById("businessForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let answers = {
        userName: document.querySelector('[name="userName"]').value,
        companyName: document.querySelector('[name="companyName"]').value,
        userEmail: document.querySelector('[name="userEmail"]').value,
        userExperience: document.querySelector('[name="userExperience"]').value,
        responses: {}
    };

    questions.forEach((question, index) => {
        let answer = document.querySelector(`[name="answer${index}"]`).value;
        answers.responses[question] = answer;
    });

    try {
        await addDoc(collection(db, "startup_questions"), answers);
        alert("Your startup questions have been submitted successfully!");
        document.getElementById("businessForm").reset();
    } catch (error) {
        console.error("Error saving data:", error);
        alert("Error saving data. Please try again.");
    }
});
