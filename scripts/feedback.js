document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;
  
    // Display a success message
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');
    successMessage.textContent = `Thank you, ${name}, for your feedback!`;
  
   
    document.getElementById('feedbackForm').reset();
  });
  