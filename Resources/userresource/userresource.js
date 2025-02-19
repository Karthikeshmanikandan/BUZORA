document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect user answers
    let answers = {};
    const formElements = e.target.elements;
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type === "radio" && formElements[i].checked) {
            answers[formElements[i].name] = formElements[i].value;
        }
    }

    // Transform answers into data (e.g., analyze answers)
    let transformedData = {
        favoriteColor: answers['q1'],
        // Add further transformations here based on the rest of the answers
    };

    // Store the transformed data in localStorage
    localStorage.setItem('userData', JSON.stringify(transformedData));

    // Redirect to the next page
    window.location.href = 'result.html';
});
