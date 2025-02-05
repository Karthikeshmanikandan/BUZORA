console.log("Business website loaded successfully.");

  // Generate certificate functionality
  function generateCertificate() {
    document.getElementById('certificateMessage').textContent = 'Certificate for your business idea is being processed!';
  }
  
  // Submit feedback
  function navigateToFeedback() {
    // Navigate to the feedback page
    window.location.href = 'feedback.html'; // Ensure the path is correct based on your folder structure
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
  
  // Contact Form Submission
  function submitContactForm(event) {
    event.preventDefault();
    alert('Your message has been sent. We will get back to you shortly!');
  }
  
  