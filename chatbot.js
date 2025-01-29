// Google Gemini API Key (Replace with your actual key)
const GEMINI_API_KEY = "AIzaSyDTGkw9dh4GCfbcAeFviMIiCfHx6pQQolo";

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendChat();
    }
}

// Send Chat Message
async function sendChat() {
    let chatInput = document.getElementById("chatInput").value.trim();
    if (chatInput === "") return;

    let chatBody = document.getElementById("chatBody");
    chatBody.innerHTML += `<p><strong>You:</strong> ${chatInput}</p>`;

    // Show "Typing..." while waiting for response
    let typingMessage = document.createElement("p");
    typingMessage.innerHTML = "<strong>Bot:</strong> Typing...";
    chatBody.appendChild(typingMessage);

    // Get response from Google Gemini AI
    let response = await fetchGeminiResponse(chatInput);

    // Remove "Typing..." message
    chatBody.removeChild(typingMessage);

    // Show bot response
    chatBody.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    chatBody.scrollTop = chatBody.scrollHeight;
    document.getElementById("chatInput").value = "";
}

// Fetch response from Google Gemini AI
async function fetchGeminiResponse(userInput) {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta2/models/gemini-pro:generateText?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: { text: userInput }
            })
        });

        const data = await response.json();
        return data.candidates[0].output || "Sorry, I couldn't understand that.";
    } catch (error) {
        console.error("Error:", error);
        return "Oops! Something went wrong. Please try again.";
    }
}
