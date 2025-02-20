import { db, collection, addDoc } from "./firebase-config.js";

const questions = [
    "What factors should I consider when defining my business idea?",
    "How do you determine whether a business idea is feasible?",
    "What are the most common mistakes entrepreneurs make in the early stages?",
    "How do you assess market demand for a new product or service?",
    "What strategies do you use to analyze competitors?",
    "How do you identify your target audience?",
    "What trends in the industry should I be aware of before starting?",
    "What are the most sustainable revenue models for a startup?",
    "How do you price a product or service effectively?",
    "What are some successful strategies for customer acquisition and retention?",
    "What key operational processes should a startup focus on?",
    "How do you manage supply chains and vendor relationships efficiently?",
    "What are the best practices for hiring and managing employees in a small business?",
    "What financial metrics should a new business track closely?",
    "How do you create realistic financial projections?",
    "What are the best ways to secure funding for a startup?",
    "How do you manage cash flow effectively?",
    "What are the most effective marketing strategies for a new business?",
    "How important is branding in the early stages of a business?",
    "How do you leverage digital marketing to grow a business?",
    "When should a business start thinking about expansion?",
    "What strategies have you used to scale a business successfully?",
    "What challenges arise when scaling a business, and how do you overcome them?",
    "What are the biggest risks that startups face, and how do you mitigate them?",
    "Can you share a major challenge you faced and how you overcame it?",
    "How do you handle business failures or setbacks?",
    "What legal aspects should a startup consider before launching?",
    "How do you protect intellectual property and business ideas?",
    "What common legal mistakes do entrepreneurs make?",
    "What’s one piece of advice you wish you had received before starting your business?",
    "What habits or mindset contribute most to entrepreneurial success?",
    "What is the best investment a new business can make?"
];

// Dynamically generate form questions
const questionsContainer = document.getElementById("questionsContainer");

questions.forEach((question, index) => {
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

    let answers = {};
    questions.forEach((question, index) => {
        let answer = document.querySelector(`[name="answer${index}"]`).value;
        answers[question] = answer;
    });

    try {
        await addDoc(collection(db, "business_plans"), {
            timestamp: new Date(),
            responses: answers
        });
        alert("Business plan submitted successfully!");
        document.getElementById("businessForm").reset();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error saving data.");
    }
});
