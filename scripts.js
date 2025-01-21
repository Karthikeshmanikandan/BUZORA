// Toggle chat window visibility
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = (chatWindow.style.display === 'flex') ? 'none' : 'flex';
  }
  
  // Send a chat message
  function sendChat(event) {
    if (event) {
      if (event.key === 'Enter' && event.target.value.trim()) {
        displayMessage(event.target.value);
      }
    } else {
      const messageInput = document.getElementById('chatInput');
      if (messageInput.value.trim()) {
        displayMessage(messageInput.value);
      }
    }
  }
  
  function displayMessage(message) {
    const chatBody = document.querySelector('.chat-body');
    chatBody.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    document.getElementById('chatInput').value = '';
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the latest message
  }
  
  // Form Submission for Business Idea
  function submitBusinessIdea(event) {
    event.preventDefault();
  
    const ideaTitle = document.getElementById('ideaTitle').value;
    const ideaDescription = document.getElementById('ideaDescription').value;
    const targetMarket = document.getElementById('targetMarket').value;
    const businessCategory = document.getElementById('businessCategory').value;
    const founderName = document.getElementById('founderName').value;
    const founderExperience = document.getElementById('founderExperience').value;
    const contactEmail = document.getElementById('contactEmail').value;
  
    fetch('http://localhost:3000/submitBusinessIdea', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ideaTitle,
        ideaDescription,
        targetMarket,
        businessCategory,
        founderName,
        founderExperience,
        contactEmail,
      }),
    })
      .then((response) => response.text())
      .then((message) => {
        document.getElementById('confirmationMessage').textContent = message;
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        document.getElementById('confirmationMessage').textContent =
          'An error occurred while submitting the form.';
      });
  }
  
  
  // Generate certificate functionality
  function generateCertificate() {
    document.getElementById('certificateMessage').textContent = 'Certificate for your business idea is being processed!';
  }
  
  // Submit feedback
  function navigateToFeedback() {
    // Navigate to the feedback page
    window.location.href = 'feedback.html'; // Ensure the path is correct based on your folder structure
  }
  
  
  // Resource button actions
  function openBusinessPlanTemplate() {
    alert('Here’s your Business Plan Template!');
  }
  
  function openInvestorPitchDeck() {
    alert('Here’s your Investor Pitch Deck Guide!');
  }
  
  function openLegalResources() {
    alert('Here’s your Legal Resources for Startups!');
  }
  
  function openStartupGrants() {
    alert('Here’s your Startup Grants and Funding Resources!');
  }
  
  function openTimeManagementTools() {
    alert('Here’s your Time Management Tools!');
  }
  
  function navigateHome() {
    window.scrollTo(0, 0);
  }
  
// Additional functionality for multiple certificates
function applyForStartupCertificate() {
    alert('You are applying for the Startup Idea Certificate!');
  }
  
  function applyForInnovationCertificate() {
    alert('You are applying for the Innovation Excellence Certificate!');
  }
  
  function applyForFundingCertificate() {
    alert('You are applying for the Funding Preparedness Certificate!');
  }
  
  // New resource buttons functionality
  function openMarketingPlan() {
    alert('Here’s your Marketing Plan Template!');
  }
  
  function openFinancialTools() {
    alert('Here’s your Financial Tools and Calculators!');
  }
  
  // Contact Form Submission
  function submitContactForm(event) {
    event.preventDefault();
    alert('Your message has been sent. We will get back to you shortly!');
  }
  
  