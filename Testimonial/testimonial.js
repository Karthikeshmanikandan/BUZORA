// Set the current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Handle form submission
document.getElementById("testimonialForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if (name && message) {
        document.getElementById("confirmationMessage").textContent = 
            "Thank you for your testimonial, " + name + "!";
        
        // Clear form
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
    }
});
