document.addEventListener("DOMContentLoaded", function () {
    console.log("Page fully loaded.");

    if (typeof db === "undefined") {
        console.error("Firebase Firestore is not initialized. Check firebase-config.js.");
        return;
    }

    const container = document.getElementById("startupQuestionsContainer");
    if (!container) {
        console.error("Error: 'startupQuestionsContainer' not found in the DOM.");
        return;
    }

    async function getStartupQuestions() {
        try {
            console.log("Fetching startup questions...");
            const querySnapshot = await db.collection("startup_questions").get();

            if (querySnapshot.empty) {
                console.warn("No startup questions found.");
                container.innerHTML = "<p>No questions available.</p>";
                return;
            }

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                console.log("Startup Question Fetched:", data);

                const button = document.createElement("button");
                button.textContent = data.userName + "'s Startup Questions";
                button.classList.add("startup-question-button");
                button.addEventListener("click", function () {
                    showStartupQuestionDetails(data);
                });
                container.appendChild(button);
            });
        } catch (error) {
            console.error("Error fetching startup questions:", error);
        }
    }

    function showStartupQuestionDetails(questionData) {
        const detailsContainer = document.getElementById("questionDetails");
        if (!detailsContainer) {
            console.error("Error: 'questionDetails' container not found.");
            return;
        }

        detailsContainer.innerHTML = `
            <h2>${questionData.userName}'s Startup Questions</h2>
            <p><strong>Company:</strong> ${questionData.companyName || "N/A"}</p>
            <p><strong>Email:</strong> ${questionData.userEmail}</p>
            <p><strong>Experience:</strong> ${questionData.userExperience || "No experience specified"}</p>
            <h3>Questions & Answers:</h3>
            <ul>
                ${Object.entries(questionData.responses).map(([question, answer]) => `<li><strong>${question}:</strong> ${answer}</li>`).join('')}
            </ul>
            <button onclick="closeDetails()">Close</button>
        `;
        detailsContainer.style.display = "block";
    }

    window.closeDetails = function () {
        const detailsContainer = document.getElementById("questionDetails");
        if (detailsContainer) detailsContainer.style.display = "none";
    };

    getStartupQuestions();
});
