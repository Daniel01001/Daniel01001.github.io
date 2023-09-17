document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form1");
  const submitButton = contactForm.querySelector("button[type='submit']");

  contactForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      // Disable the submit button during submission
      submitButton.disabled = true;

      const formData = new FormData(contactForm);

      try {
          const response = await fetch("php/contact.php", {
              method: "POST",
              body: formData,
          });

          if (!response.ok) {
              throw new Error("Network response was not ok");
          }

          const responseData = await response.json();

          if (responseData.success) {
              alert("Message sent successfully!");
              contactForm.reset(); // Clear form fields
          } else {
              alert("An error occurred: " + responseData.error);
          }
      } catch (error) {
          alert("An error occurred: " + error.message);
      } finally {
          // Re-enable the submit button
          submitButton.disabled = false;
      }
  });
});
