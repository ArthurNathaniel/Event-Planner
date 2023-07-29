
  // Function to handle form submission and send the email
  function sendEmail() {
    // Prevent the default form submission
    event.preventDefault();

    // Your EmailJS service ID
    const serviceID = "service_ogu1cl8";
    
    // Your EmailJS template ID
    const templateID = "template_wejb8sg";

    // Replace 'user_YOUR_USER_ID' with your actual User ID from your EmailJS account
    emailjs.init("YItQ0Zs29AU659hPr");

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

    // Show "Please wait" text on the button
    document.getElementById('submitBtn').textContent = 'Please wait...';
    document.getElementById('submitBtn').disabled = true;

    // Send the email
    emailjs.send(serviceID, templateID, formData)
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Optionally, display a success message to the user
        alert('Thank you! Your booking has been submitted.');

        // Reset the form and button text after successful submission
        document.getElementById('contact-form').reset();
        document.getElementById('submitBtn').textContent = 'Book Now';
        document.getElementById('submitBtn').disabled = false;
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        // Optionally, display an error message to the user
        alert('Sorry, there was an error submitting your booking. Please try again later.');

        // Reset the button text after an error
        document.getElementById('submitBtn').textContent = 'Book Now';
        document.getElementById('submitBtn').disabled = false;
      });
  }

  // Add an event listener to the form's submit button
  document.getElementById('contact-form').addEventListener('submit', sendEmail);

