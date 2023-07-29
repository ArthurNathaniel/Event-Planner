emailjs.init("pTaqTZOS5Laa7Bddx");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    changeSubmitButtonText("Please wait, your request is being processed...");
    sendMail();
  });

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    address: document.getElementById("address").value,
    event: document.getElementById("event").value,
    guest: document.getElementById("guest").value,
    budget: document.getElementById("budget").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_zm0ml4s";
  const templateID = "template_k2ke9yz";

  emailjs.send(serviceID, templateID, params).then(
    function (response) {
      console.log("Email sent successfully:", response);
      alert("Your reservation has been sent! We will get back to you soon.");
      clearForm(); // Optionally, you can call a function to clear the form after successful submission.
      changeSubmitButtonText("Submit"); // Reset the submit button text after successful submission.
    },
    function (error) {
      console.error("Reservation failed to send:", error);
      alert(
        "Sorry, there was an error sending your reservation. Please try again later."
      );
      changeSubmitButtonText("Submit"); // Reset the submit button text after unsuccessful submission.
    }
  );
}

function changeSubmitButtonText(text) {
  document.getElementById("submitBtn").value = text;
}

function clearForm() {
  document.getElementById("contact-form").reset();
}
