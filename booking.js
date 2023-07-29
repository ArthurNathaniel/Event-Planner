
  // Function to handle form submission and send the email (as shown in the previous answer)
  // ... (Your existing JavaScript code)

  function updateSubmitButtonText(text) {
    document.getElementById('submitBtn').textContent = text;
  }

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Show "Please wait" text on the button
    updateSubmitButtonText('Please wait...');

    // Get the form data
    const formData = {
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      from_number: document.getElementById('number').value,
      from_address: document.getElementById('address').value,
      event_type: document.getElementById('event').value,
      guest_count: document.getElementById('guest').value,
      budget: document.getElementById('budget').value,
      message: document.getElementById('message').value,
    };

    // Send the email
    emailjs.send(serviceID, templateID, formData)
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Optionally, display a success message to the user
        alert('Thank you! Your booking has been submitted.');

        // Reset the form and button text after successful submission
        document.getElementById('contact-form').reset();
        updateSubmitButtonText('Book Now');
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        // Optionally, display an error message to the user
        alert('Sorry, there was an error submitting your booking. Please try again later.');

        // Reset the button text after an error
        updateSubmitButtonText('Book Now');
      });
  });

