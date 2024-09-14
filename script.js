// Add event listeners to navigation buttons
document.querySelectorAll("nav button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = event.target.textContent.trim().toLowerCase();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Ensure that the form submission is handled correctly by Formspree
document.querySelector("form").addEventListener("submit", function (event) {
  // Remove event.preventDefault() to allow Formspree to handle the submission
  // event.preventDefault(); // Remove or comment out this line

  // Optionally, you can add additional validation or logic here if needed
  console.log("Form submitted!"); // This will log when the form is submitted
});
