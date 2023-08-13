document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-forms");
    const submitButton = contactForm.querySelector("button[type='submit']");
    
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      
      // Disable the submit button during submission
      submitButton.disabled = true;
      
      const formData = new FormData(contactForm);
      const xhr = new XMLHttpRequest();
      
      xhr.open("POST", "php/contact.php", true); // Adjust the path to php/contact.php
      xhr.setRequestHeader("Accept", "application/json");
      
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          submitButton.disabled = false; // Re-enable the submit button
          
          const response = JSON.parse(xhr.responseText);
          if (response.success) {
            alert("Message sent successfully!");
            contactForm.reset(); // Clear form fields
          } else {
            alert("An error occurred. Please try again later.");
          }
        }
      };
      
      xhr.send(formData);
    });
  });
  