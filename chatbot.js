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
// Fetch response from Google Gemini API
async function fetchGeminiResponse(userInput) { 
    const apiKey = 'AIzaSyDTGkw9dh4GCfbcAeFviMIiCfHx6pQQolo';  // Replace with a valid key
    const url = `http://generativelanguage.googleapis.com/v1/models/gemini-pro:generateText?key=${apiKey}`;
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: { 
                text: userInput 
            },
            temperature: 0.9,
            maxTokens: 256
        })
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("Full API Response:", result);  // Debugging: Print full API response
        
        if (result.error) {
            console.error("API Error:", result.error);
            return `API Error: ${result.error.message}`;
        }

        if (result && result.candidates && result.candidates.length > 0) {
            return result.candidates[0].output;
        } else {
            return "Sorry, I couldn't process your request.";
        }
    } catch (error) {
        console.error("Network or Fetch Error:", error);
        return "An error occurred while fetching response.";
    }
}
