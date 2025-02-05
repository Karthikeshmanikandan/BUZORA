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

    // Get response from API
    let response = await fetchGeminiResponse(chatInput);

    // Remove "Typing..." message
    chatBody.removeChild(typingMessage);

    // Show bot response
    chatBody.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    chatBody.scrollTop = chatBody.scrollHeight;
    document.getElementById("chatInput").value = "";
}

// Fetch response from backend server (Node.js)
async function fetchGeminiResponse(userInput) { 
    try {
        const response = await fetch("http://localhost:5000/chat", {  // Call local backend
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: userInput })  // Send message to backend
        });

        const result = await response.json();
        return result.reply;
    } catch (error) {
        console.error("Error:", error);
        return "An error occurred while fetching response.";
    }
}
