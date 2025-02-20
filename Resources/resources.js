document.addEventListener("DOMContentLoaded", function () {
    console.log("Page fully loaded.");

    // ✅ Ensure Firestore (`db`) is available
    if (typeof db === "undefined") {
        console.error("Firebase Firestore is not initialized. Check firebase-config.js.");
        return;
    }

    // ✅ Ensure the container exists before appending elements
    const container = document.getElementById("businessPlansContainer");
    if (!container) {
        console.error("Error: 'businessPlansContainer' not found in the DOM.");
        return;
    }

    async function getBusinessPlans() {
        try {
            console.log("Fetching business plans...");
            const querySnapshot = await db.collection("business_plans").get();

            if (querySnapshot.empty) {
                console.warn("No business plans found.");
                container.innerHTML = "<p>No business plans available.</p>";
                return;
            }

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                console.log("Business Plan Fetched:", data);

                // ✅ Create a unique button for each business plan
                const button = document.createElement("button");
                button.textContent = data.title || "Unnamed Business Plan";
                button.classList.add("business-plan-button");

                // ✅ Add a click event to show details
                button.addEventListener("click", function () {
                    showBusinessPlanDetails(data);
                });

                // ✅ Append to the existing container
                container.appendChild(button);
            });
        } catch (error) {
            console.error("Error fetching business plans:", error);
        }
    }

    function showBusinessPlanDetails(plan) {
        const detailsContainer = document.getElementById("planDetails");

        if (!detailsContainer) {
            console.error("Error: 'planDetails' container not found.");
            return;
        }

        // ✅ Format plan details into a readable format
        detailsContainer.innerHTML = `
            <h2>${plan.title || "Business Plan"}</h2>
            <p><strong>Description:</strong> ${plan.description || "No description available."}</p>
            <p><strong>Founder:</strong> ${plan.founder || "Unknown"}</p>
            <p><strong>Industry:</strong> ${plan.industry || "N/A"}</p>
            <p><strong>Funding Required:</strong> ${plan.funding || "Not specified"}</p>
            <button onclick="closeDetails()">Close</button>
        `;

        // ✅ Show the modal or details section
        detailsContainer.style.display = "block";
    }

    // ✅ Function to close details
    window.closeDetails = function () {
        const detailsContainer = document.getElementById("planDetails");
        if (detailsContainer) detailsContainer.style.display = "none";
    };

    // ✅ Fetch business plans when the page loads
    getBusinessPlans();
});
