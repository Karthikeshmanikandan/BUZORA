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
async function fetchGeminiResponse(userInput){ 
    const url = 'https://chatgpt-42.p.rapidapi.com/matag2';
    console.log("Fetching Response from url: ", url)
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '200bec7aacmsh19148d7fcb28284p13bcefjsn654b24fecfed',
            'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: {
            messages: [
                {
                    role: 'user',
                    content: 'hello'
                }
            ],
            system_prompt: '',
            temperature: 0.9,
            top_k: 5,
            top_p: 0.9,
            image: '',
            max_tokens: 256
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log("Result",result);
    } catch (error) {
        console.log("Error occured while fetching.")
        
        console.error(error);
    }
}